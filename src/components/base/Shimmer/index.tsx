import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Animated, Easing, StyleSheet} from 'react-native';
import {View, ViewProps} from 'components/base';
import {GRADIENT} from 'themes/color';
import {hs} from 'themes/helper';

interface ShimmerProps extends ViewProps {
  /**
   * - normal: 1000
   * - slow: 2000
   * @default normal
   */
  speed?: 'normal' | 'slow' | number;
}

export const Shimmer: React.FC<ShimmerProps> = ({speed = 'normal', ...props}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: typeof speed === 'number' ? speed : speed === 'slow' ? 2000 : 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, [animatedValue, speed]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-hs(width), hs(width)],
  });

  return (
    <View
      height={10}
      style={{overflow: 'hidden'}}
      backgroundColor={GRADIENT.shimmer[0]}
      onLayout={e => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      {...props}>
      <Animated.View style={{...StyleSheet.absoluteFillObject, transform: [{translateX}]}}>
        <LinearGradient
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.25, 0.5, 0.75, 1]}
          colors={GRADIENT.shimmer}
        />
      </Animated.View>
    </View>
  );
};
