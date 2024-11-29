import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Pressable, Text, View} from 'components/base';
import {COLORS} from 'themes/color';
import {width} from 'themes/helper';

type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
};

const internalPadding = 20;
const segmentedControlWidth = width - 40;

export const SegmentedControl: React.FC<SegmentedControlProps> = React.memo(({options, selectedOption, onOptionPress}) => {
  const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      top: '10%',
      height: '80%',
      borderRadius: 10,
      width: itemWidth,
      position: 'absolute',
      backgroundColor: COLORS.border,
      left: withTiming(itemWidth * options.indexOf(selectedOption) + internalPadding / 2),
    };
  }, [selectedOption, options, itemWidth]);

  return (
    <View
      rowCenter
      height={55}
      radius={20}
      width={segmentedControlWidth}
      paddingLeft={internalPadding / 2}
      backgroundColor={COLORS.antiFlashWhite}>
      <Animated.View style={rStyle} />
      {options.map(option => (
        <Pressable
          contentCenter
          key={option}
          width={itemWidth}
          onPress={() => {
            onOptionPress?.(option);
          }}>
          <Text fontSize={16} fontWeight={500}>
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
});
