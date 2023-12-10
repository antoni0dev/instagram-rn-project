import {TextStyle} from 'react-native';

export const FONT_SIZES = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
};

export const FONT_WEIGHTS: {[key: string]: TextStyle['fontWeight']} = {
  boldest: '900',
  bolder: '800',
  semiBold: '600',
  bold: 'bold',
  normal: '400',
  semiThin: '300',
  thin: '200',
};
