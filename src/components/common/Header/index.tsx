import React, {ReactElement} from 'react';
import {View, ViewProps, Icon, Pressable, Text} from 'components/base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationRef} from 'routes';
import {width} from 'themes/helper';
import {COLORS} from 'themes/color';

type HeaderProps = Partial<{
  title: string;
  titlePosition: 'right' | 'left' | 'center';
  goBack: boolean;
  goBackText: string;
  backgroundColor: string;
  LeftComponent: ReactElement;
  RightComponent: ReactElement | React.JSX.Element;
}>;

export const Header: React.FC<HeaderProps & ViewProps> = ({
  title,
  goBackText,
  goBack,
  titlePosition = 'center',
  backgroundColor = COLORS.white,
  LeftComponent,
  RightComponent,
  ...props
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View rowCenter height={52 + top} paddingTop={top} paddingHorizontal={8} backgroundColor={backgroundColor} {...props}>
      {titlePosition !== 'left' && (
        <View flexGrow={1} flexBasis={0} justifyContent="flex-start">
          {goBack ? (
            <Pressable rowCenter gap={8} padding={8} onPress={navigationRef.goBack}>
              <Icon type="MaterialIcons" name="arrow-back" size={25} />
              {!!goBackText && <Text fontSize={15}>{goBackText}</Text>}
            </Pressable>
          ) : LeftComponent ? (
            LeftComponent
          ) : null}
        </View>
      )}
      <View marginHorizontal={16} maxWidth={width - 16 - 32 - 41 - 74}>
        <Text fontSize={22} fontWeight={'600'} textAlign={titlePosition} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View row flexGrow={1} flexBasis={0} justifyContent="flex-end">
        {RightComponent}
      </View>
    </View>
  );
};
