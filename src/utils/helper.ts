import axios from 'axios';
import {AnyObject} from 'interfaces/shared';
import moment from 'moment';
import {getVersion} from 'react-native-device-info';
import {CameraDevice, CameraDeviceFormat} from 'react-native-vision-camera';

/**
 * @param time miliseconds
 * @default 3000
 */
export const sleep = (time = 3000) => new Promise(r => setTimeout(r, time));

export const displayVersion = () => {
  return `v.${getVersion()}.${moment().format('HHmm.DDMM')}`;
};

export const getDeviceIp = async () => {
  try {
    const res = await axios.get('https://api.ipify.org/?format=json');
    return res.data.ip as string;
  } catch (error) {
    return null;
  }
};

export const removeUndefinedObject = (obj: AnyObject) => {
  Object.keys(obj).forEach(k => {
    if (obj[k] === null || obj[k] === undefined) {
      delete obj[k];
    }
    if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      removeUndefinedObject(obj[k]);
    }
  });
  return obj;
};

export const getBestFormatCamera = (device: CameraDevice, targetWidth: number, targetHeight: number): CameraDeviceFormat => {
  const size = targetWidth * targetHeight;
  return device.formats.reduce((prev, curr) => {
    const currentSize = curr.videoWidth * curr.videoHeight;
    const diff = Math.abs(size - currentSize);
    const previousSize = prev.videoWidth * prev.videoHeight;
    const prevDiff = Math.abs(size - previousSize);
    if (diff < prevDiff) {
      return curr;
    }
    return prev;
  }, device.formats[0]);
};

export const mapValueLabel = <T, KV extends keyof T, KL extends keyof T>(
  list: T[] | undefined,
  keyValue: KV,
  keyLabel: KL,
) => {
  return list?.map(x => ({
    ...x,
    value: x[keyValue],
    label: x[keyLabel],
  }));
};
