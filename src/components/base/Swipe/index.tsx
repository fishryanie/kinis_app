import React, {useRef} from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {View, Pressable, Text} from 'components/base';
import {COLORS} from 'themes/color';
import {width} from 'themes/helper';

interface SwipeProps {
  renderRight?: {title: string; backgroundColor: string; onPress?: () => void}[];
  children: React.ReactElement;
}

export const Swipe: React.FC<SwipeProps> = ({children, renderRight}) => {
  const swipeRowRef = useRef<Swipeable>(null);

  return (
    <Swipeable
      ref={swipeRowRef}
      renderRightActions={() => (
        <View rowCenter>
          {renderRight?.map((item, index) => (
            <Pressable
              key={index}
              rowCenter
              height={'100%'}
              width={width / 4}
              backgroundColor={item.backgroundColor}
              onPress={() => {
                swipeRowRef.current?.close();
                item.onPress && item.onPress();
              }}>
              <Text flex fontWeight="medium" textAlign="center" fontSize={16} color={COLORS.white}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      )}>
      {children}
    </Swipeable>
  );
};
