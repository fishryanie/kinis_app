import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {useCameraPermission} from 'hooks/permissions';
import {runOnUI} from 'react-native-reanimated';

export default function PoseDetection() {
  const devices = useCameraDevices();
  const device = devices.find(x => x.position === 'back');
  const cameraRef = useRef<Camera>(null);

  const [cameraHasPermission] = useCameraPermission();
  const [model, setModel] = useState<poseDetection.PoseDetector>();

  // Create a frame processor to handle each frame
  const processFrame = useFrameProcessor(
    frame => {
      'worklet'; // Ensure this runs on the UI thread
      runOnUI(async () => {
        const imageTensor = tf.browser.fromPixels(frame); // Convert the frame to an image tensor
        if (model) {
          const poses = await model.estimatePoses(imageTensor); // Use the model to estimate poses
          console.log('Poses:', poses); // Log detected poses
        }
        imageTensor.dispose(); // Dispose the tensor to free up memory
      });
    },
    [model],
  );

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
      setModel(detector);
      console.log('Pose Detection Model Loaded');
    };
    loadModel();
  }, []);

  if (device === null || !cameraHasPermission) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      {device && (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={processFrame}
          fps={15}
        />
      )}
      <View style={styles.overlay}>
        <Text style={styles.text}>Pose Detection in Progress...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
