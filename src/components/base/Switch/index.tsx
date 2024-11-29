import React, {useEffect, useState} from 'react';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {View, ViewProps} from 'components/base';
import {COLORS} from 'themes/color';

type SwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  activeColor?: string;
  inActiveColor?: string;
} & ViewProps;

export const Switch = ({
  onChange,
  value = false,
  activeColor = COLORS.primary,
  inActiveColor = COLORS.antiFlashWhite,
  ...props
}: SwitchProps) => {
  const [valueSwitch, setValueSwitch] = useState(value);
  const switchTranslate = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return withTiming(valueSwitch ? 20 : 0);
  });

  const handleChange = () => {
    setValueSwitch(!valueSwitch);
    onChange?.(!valueSwitch);
  };

  useEffect(() => {
    if (valueSwitch) {
      switchTranslate.value = 24;
    } else {
      switchTranslate.value = 2;
    }
  }, [valueSwitch, switchTranslate]);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0, 22], [inActiveColor, activeColor]);
    return {
      backgroundColor,
    };
  });

  return (
    <View {...props}>
      <TouchableWithoutFeedback onPress={handleChange}>
        <Animated.View style={[styles.container, backgroundColorStyle]}>
          <Animated.View style={[styles.circle, customSpringStyles]} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 22,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.antiFlashWhite,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
