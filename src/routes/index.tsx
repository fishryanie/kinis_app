import React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNotificationPermission} from 'hooks/permissions';
import {useFCMToken} from 'hooks/common';
import {useAppDispatch} from 'hooks/redux';
import {onReadyNavigate} from 'stores/app/reducer';
import {RootStackParamList} from 'routes/router';
// import Bottom from './Bottom';
import AccountInfoScreen from 'screens/common/AccountInfoScreen';
import Bottom from './Bottom';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export default function Routes() {
  // useFCMToken();
  // useNotificationPermission();

  const dispatch = useAppDispatch();

  const handleReadyNavigation = () => dispatch(onReadyNavigate(true));

  return (
    <NavigationContainer ref={navigationRef} onReady={handleReadyNavigation}>
      <Stack.Navigator initialRouteName="Bottom" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={Bottom} />
        <Stack.Screen name="AccountInfoScreen" component={AccountInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
