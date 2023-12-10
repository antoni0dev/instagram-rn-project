import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONT_WEIGHTS} from '../../theme/fonts';

const styles = StyleSheet.create({
  primary: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 5,
    padding: 5,
  },
  secondary: {},
  tertiary: {},
  textStyles: {
    fontWeight: FONT_WEIGHTS.semiBold,
    alignSelf: 'center',
  },
});

export default styles;
