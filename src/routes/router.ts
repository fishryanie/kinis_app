import {BottomTabScreenProps as RNBottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = AuthParamList &
  CommonParamList & {
    Bottom: NavigatorScreenParams<BottomParamList>;
  };

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomParamList> = CompositeScreenProps<
  RNBottomTabScreenProps<BottomParamList, T>,
  RootStackScreenProps<'Bottom'>
>;

export type AuthParamList = {
  LoginScreen: undefined;
};

export type BottomParamList = {
  BottomHomeScreen: undefined;
  BottomHistoryScreen: undefined;
  BottomScannerScreen: undefined;
  BottomProfileScreen: undefined;
  BottomMessageScreen: undefined;
};

export type CommonParamList = {
  SettingScreen: undefined;
  AccountInfoScreen: undefined;
};
