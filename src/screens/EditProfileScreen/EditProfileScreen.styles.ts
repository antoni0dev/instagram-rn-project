import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../../theme/fonts';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.l,
    fontWeight: FONT_WEIGHTS.semiBold,

    margin: 10,
    marginBottom: 25,
  },
});

export default styles;
