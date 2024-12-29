import React from 'react';
import Animated, {FadeIn, FadeOut, LinearTransition} from 'react-native-reanimated';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dumbbell, History, MessageCircleMore, MessageSquareText, PersonStanding, Radio} from 'lucide-react-native';
import {BottomParamList} from 'routes/router';
import {DetectScreen, HomeScreen, MessagesScreen} from 'screens/bottom';
import {Pressable, View} from 'components/base';
import {StyleSheet} from 'react-native';
import {COLORS} from 'themes/color';

const Tabs = createBottomTabNavigator<BottomParamList>();
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Bottom() {
  return (
    <Tabs.Navigator tabBar={CustomNavBar}>
      <Tabs.Screen name="BottomHomeScreen" component={HomeScreen} options={{tabBarLabel: 'Home'}} />
      <Tabs.Screen name="BottomHistoryScreen" component={MessagesScreen} options={{tabBarLabel: 'History'}} />
      <Tabs.Screen name="BottomProfileScreen" component={MessagesScreen} options={{tabBarLabel: 'Workout'}} />
      <Tabs.Screen name="BottomScannerScreen" component={DetectScreen} options={{tabBarLabel: 'Home'}} />
      <Tabs.Screen name="BottomMessageScreen" component={MessagesScreen} options={{tabBarLabel: 'Chat'}} />
    </Tabs.Navigator>
  );
}

const CustomNavBar: React.FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <AnimatedPressable
            rowCenter
            gap={8}
            height={40}
            radius={20}
            key={route.key}
            onPress={onPress}
            paddingHorizontal={isFocused ? 20 : 12}
            layout={LinearTransition.springify().mass(0.5)}
            backgroundColor={isFocused ? COLORS.white : COLORS.primary}>
            {getIconByRouteName(route.name as keyof BottomParamList, isFocused ? COLORS.primary : COLORS.white)}
            {isFocused && (
              <Animated.Text entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)} style={styles.text}>
                {label as string}
              </Animated.Text>
            )}
          </AnimatedPressable>
        );
      })}
    </View>
  );
};

function getIconByRouteName(routeName: keyof BottomParamList, color: string) {
  switch (routeName) {
    case 'BottomMessageScreen':
      return <MessageCircleMore size={18} color={color} />;
    case 'BottomHistoryScreen':
      return <History size={18} color={color} />;
    case 'BottomScannerScreen':
      return <Dumbbell size={18} color={color} />;
    case 'BottomProfileScreen':
      return <Radio size={18} color={color} />;
    case 'BottomHomeScreen':
      return <PersonStanding size={18} color={color} />;
    default:
      return <MessageSquareText size={18} color={color} />;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '88%',
    alignSelf: 'center',
    bottom: 40,
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  text: {
    color: COLORS.primary,
    fontWeight: '500',
  },
});
