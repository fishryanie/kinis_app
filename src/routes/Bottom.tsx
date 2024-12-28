import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {BottomParamList} from 'routes/router';
import {DetectScreen, HomeScreen, MessagesScreen} from 'screens/bottom';
import {Image, View} from 'components/base';
import {StyleSheet} from 'react-native';
import {COLORS} from 'themes/color';
import {GIFS, ICONS} from 'assets';
import {hs} from 'themes/helper';

type RenderIcon = {
  iconProps: {focused: boolean; color: string; size: number};
  tabBar: BottomListRenderItem;
};

type BottomListRenderItem = {
  label: string;
  name: keyof BottomParamList;
  screen: any;
  icon: string;
};

const data: BottomListRenderItem[] = [
  {screen: HomeScreen, label: 'Home', name: 'BottomHomeScreen', icon: ICONS.ic_bottomNewsFeed},
  {screen: HomeScreen, label: 'Statistical', name: 'BottomHistoryScreen', icon: ICONS.ic_bottomStatistical},
  {screen: DetectScreen, label: 'Detector', name: 'BottomScannerScreen', icon: ICONS.ic_bottomPlan},
  {screen: MessagesScreen, label: 'Messages', name: 'BottomMessageScreen', icon: ICONS.ic_bottomMessage},
  {screen: HomeScreen, label: 'Premium', name: 'BottomProfileScreen', icon: ICONS.ic_bottomPremium},
];

const Tab = createBottomTabNavigator<BottomParamList>();

export default function Bottom() {
  return (
    <Tab.Navigator initialRouteName="BottomHomeScreen" screenOptions={() => ({headerShown: false})}>
      {data.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.screen}
          options={{
            tabBarIcon: props => <RenderIcon iconProps={props} tabBar={item} />,
            tabBarInactiveTintColor: COLORS.textPlaceholder,
            tabBarActiveTintColor: COLORS.primary,
            tabBarLabelStyle: {fontSize: hs(12)},
            tabBarStyle: styles.tabBar,
            tabBarLabel: item.label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const RenderIcon = (props: RenderIcon) => {
  if (props.tabBar.name === 'BottomScannerScreen') {
    return (
      <View contentCenter round={75} marginBottom={15} backgroundColor={COLORS.white}>
        <View contentCenter round={56} backgroundColor={COLORS.primary}>
          <Image source={GIFS.ic_scanner} square={props.iconProps.size + 10} />
          {/* <LottieView
            autoPlay
            loop
            source={LOTTIES.QRScanner}
            style={{width: props.iconProps.size, height: props.iconProps.size}}
          /> */}
        </View>
      </View>
    );
  }
  return (
    <Image
      source={{uri: props.tabBar.icon}}
      square={props.iconProps.focused ? props.iconProps.size + 2 : props.iconProps.size}
      tintColor={props.iconProps.color}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: hs(90),
    paddingBottom: initialWindowMetrics?.insets.bottom || 25,
  },
});
