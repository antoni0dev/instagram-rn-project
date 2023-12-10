import React, {FC} from 'react';
import styles from './Button.styles';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {BUTTON_VARIANTS} from '../../lib/constants';

type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

interface Props {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const getButtonStyles = (variant: Props['variant']) => {
  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return styles.primary;
    case BUTTON_VARIANTS.SECONDARY:
      return styles.secondary;
    case BUTTON_VARIANTS.TERTIARY:
      return styles.tertiary;
    default:
      return styles.primary;
  }
};

export const Button: FC<Props> = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  onPress,
  children,
  style,
  textStyle,
}) => {
  return (
    <Pressable style={[getButtonStyles(variant), style]} onPress={onPress}>
      <Text style={[styles.textStyles, textStyle]}>{children}</Text>
    </Pressable>
  );
};
