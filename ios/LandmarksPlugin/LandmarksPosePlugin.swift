import VisionCamera
import MediaPipeTasksVision

@objc(LandmarksPosePlugin)
public class LandmarksPosePlugin: FrameProcessorPlugin {
  private var poseLandmarker: PoseLandmarker?
  private var frameCounter = 0
  
  public override init(proxy: VisionCameraProxyHolder, options: [AnyHashable: Any]! = [:]) {
    super.init(proxy: proxy, options: options)
    
    let modelPath = Bundle.main.path(forResource: "landmarkerPoseLite", ofType: "task")
    
    let options = PoseLandmarkerOptions()
    options.baseOptions.modelAssetPath = modelPath ?? "landmarkerPoseLite.task"
    options.runningMode = .video
    options.minPoseDetectionConfidence = 0.7 
    options.minPosePresenceConfidence = 0.7
    options.minTrackingConfidence = 0.7
    options.numPoses = 1 
    
    do {
      poseLandmarker = try PoseLandmarker(options: options)
    } catch {
      print("Failed to create PoseLandmarker: \(error)")
    }
  }

  public override func callback(_ frame: Frame, withArguments arguments: [AnyHashable: Any]?) -> Any? {
    guard let poseLandmarker = poseLandmarker else {
      return nil
    }



    let buffer = frame.buffer


    do {
      let image = try MPImage(sampleBuffer: buffer)
      let result = try poseLandmarker.detect(videoFrame: image, timestampInMilliseconds: Int(frame.timestamp))
      
      var landmarks = [] as Array

      for pose in result.landmarks {
        var marks = [] as Array

        for mark in pose {
          marks.append([
            "x": mark.x,
            "y": mark.y
          ])
        }

        landmarks.append(marks)
      }

      return landmarks
    } catch {
      print("Failed to detect pose: \(error)")
      return nil
    }
  }
}
