import React from 'react';
import {Button, Text, View} from 'components/base';
import {BottomTabScreenProps} from 'routes/router';
import {BleManager} from 'react-native-ble-plx';

export type HomeScreenProps = BottomTabScreenProps<'BottomHomeScreen'>;

const bleManager = new BleManager();

export const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View flex contentCenter>
      {/* <Button onPress={startScanning}>HomeScreen</Button> */}
    </View>
  );
};

// Function to start scanning BLE devices
// function startScanning() {
//   // The first parameter is the UUIDs of services (null if you want to scan all devices)
//   // Second parameter - scanning options
//   // The third parameter is a callback called when a device is detected
//   bleManager.startDeviceScan(null, null, (error, scannedDevice) => {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//     if (scannedDevice && scannedDevice.name === NAME) {
//       console.log(scannedDevice.name, scannedDevice.rssi);
//       // const distance = calculateDistance(scannedDevice.rssi);
//       // console.log('🚀 ~ bleManager.startDeviceScan ~ distance:', distance);
//       // const averageRssi = addRssiValueAndGetAverage(scannedDevice.id, scannedDevice.rssi);
//       // console.log(`Average RSSI value for device ${scannedDevice.name}: ${averageRssi}`);
//     }
//   });
// }
// Stop scanning if necessary
// function stopScanning() {
//   bleManager.stopDeviceScan();
// }

// function calculateDistance(rssi, measure = -69, multiplier = 2) {
//   return Math.pow(10, (measure - rssi) / (10 * multiplier));
// }

// function addRssiValueAndGetAverage(deviceId, newValue, maxSize = 3) {
//   if (!rssiValues[deviceId]) {
//     rssiValues[deviceId] = []; // Initialize the array if this is the first value
//   }
//   const values = rssiValues[deviceId];
//   values.push(newValue); // Add a new value

//   // Remove the oldest value if the maximum array size is exceeded
//   if (values.length > maxSize) {
//     values.shift();
//   }

//   // Calculate the average value
//   const averageRssi = values.reduce((acc, value) => acc + value, 0) / values.length;
//   return averageRssi;
// }
