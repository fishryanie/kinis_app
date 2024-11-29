import React from 'react';
import Animated, {SharedValue, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {Icon, Pressable, Swipe, Text, View} from 'components/base';
import {Avatar, Header} from 'components/common';
import {FlatList, ViewToken} from 'react-native';

import ListMessage from './mocks.json';
import {COLORS} from 'themes/color';

type ItemList = {
  id: string;
  name: string;
  message: string;
  avatar: string;
  time: string;
};
type ListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item: ItemList;
};

export const MessagesScreen = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View flex backgroundColor={COLORS.white}>
      <Header
        title="Notifications"
        LeftComponent={
          <Pressable padding={8}>
            <Icon name="menu" type="Feather" />
          </Pressable>
        }
        RightComponent={
          <View rowCenter>
            <Pressable padding={8}>
              <Icon name="search" type="Feather" />
            </Pressable>
            <Pressable padding={8}>
              <Icon name="email" type="Fontisto" />
            </Pressable>
          </View>
        }
      />
      <FlatList
        data={ListMessage as ItemList[]}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
        renderItem={({item}) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
};

const ListItem: React.FC<ListItemProps> = React.memo(({item, viewableItems}) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value.filter(item => item.isViewable).find(viewableItem => viewableItem.item.id === item.id),
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Swipe renderRight={[{title: 'Delete', backgroundColor: COLORS.textError, onPress: () => {}}]}>
      <Animated.View style={rStyle}>
        <View row gap={12} padding={12} backgroundColor={COLORS.white}>
          <Avatar name={item.name} />
          <View flex>
            <View row>
              <Text flex fontWeight={600}>
                {item.name}
              </Text>
              <Text color={COLORS.textPlaceholder}>{item.time}</Text>
            </View>
            <Text marginRight={12} numberOfLines={1} color={COLORS.textPlaceholder}>
              {item.message}
            </Text>
          </View>
        </View>
        <View height={1} marginLeft={74} backgroundColor={COLORS.antiFlashWhite} />
      </Animated.View>
    </Swipe>
  );
});
