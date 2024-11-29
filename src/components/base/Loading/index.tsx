// import React, {ReactElement} from 'react';
// import {COLORS} from 'themes/color';
// import {ActivityIndicator} from 'react-native';
// import {View, ViewProps, Text, TextProps} from 'components/base';

// type LoadingProps = Partial<{
//   color: string;
//   visible: boolean;
//   size: 'small' | 'large' | number;
//   textStyle: TextProps;
//   textContent: string;
//   customIndicator: ReactElement;
//   //visibleOnBlur: boolean;
// }>;

// export const Loading = ({
//   color = COLORS.white,
//   size = 'large',
//   textContent = 'Loading...',
//   textStyle,
//   visible = false,
//   customIndicator,
//   ...props
// }: LoadingProps & BlockProps) => {
//   if (!visible) {
//     return null;
//   }

//   return (
//     <Modal position="center" isVisible={visible} backdropOpacity={0.25} animationDuration={0}>
//       <View flex contentCenter {...props}>
//         {customIndicator ? customIndicator : <ActivityIndicator color={color} size={size} />}
//         {textContent ? (
//           <Text fontWeight="medium" textAlign="center" fontSize={18} color={color} {...textStyle}>
//             {textContent}
//           </Text>
//         ) : null}
//       </View>
//     </Modal>
//   );
// };
