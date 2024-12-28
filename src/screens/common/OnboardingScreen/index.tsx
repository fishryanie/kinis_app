import React from 'react';
import {StyleSheet, Text, View, ViewToken} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from 'react-native-reanimated';
import Pagination from './components/Pagination';
import CustomButton from './components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {data, DataItem} from './data';
import {width} from 'themes/helper';

const RenderItem: React.FC<{item: DataItem; index: number; x: SharedValue<number>}> = ({item, index, x}) => {
  const imageAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const translateYAnimation = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [100, 0, 100],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnimation,
      width: width * 0.8,
      height: width * 0.8,
      transform: [{translateY: translateYAnimation}],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const translateYAnimation = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [100, 0, 100],
      Extrapolation.CLAMP,
    );

    return {
      opacity: opacityAnimation,
      transform: [{translateY: translateYAnimation}],
    };
  });

  return (
    <View style={[styles.itemContainer, {width}]}>
      <Animated.Image source={item.image} style={imageAnimationStyle} />
      <Animated.View style={textAnimationStyle}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemText}>{item.text}</Text>
      </Animated.View>
    </View>
  );
};

const OnboardingScreen: React.FC = () => {
  const flatListRef = useAnimatedRef<Animated.FlatList<DataItem>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems.length > 0) {
      flatListIndex.value = viewableItems[0].index ?? 0;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => <RenderItem item={item} index={index} x={x} />}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} />
        <CustomButton flatListRef={flatListRef} flatListIndex={flatListIndex} dataLength={data.length} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9B0',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8E9B0',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  itemText: {
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'black',
    lineHeight: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
});
