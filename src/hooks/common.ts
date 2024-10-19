import messaging from '@react-native-firebase/messaging';
import {DependencyList, EffectCallback, useEffect, useRef,} from 'react';
import {isEqual} from 'lodash';
import {Alert} from 'react-native';
import {useAppDispatch} from 'hooks/redux';
import {onSaveDeviceToken} from 'stores/app/reducer';

const useDeepCompareMemoize = <T>(value: T): T => {
  const ref = useRef<T>(value);
  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
};

export const useDeepCompareEffect = (callback: EffectCallback, dependencies: DependencyList) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

export const useFCMToken = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        dispatch(onSaveDeviceToken());
        if (__DEV__) {
          console.log('DEVICE_TOKEN', token);
        }
      });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
