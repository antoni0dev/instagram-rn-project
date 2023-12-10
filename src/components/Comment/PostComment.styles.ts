import {StyleSheet} from 'react-native';
import {FONT_WEIGHTS} from '../../theme/fonts';

export const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
  },
  boldText: {
    fontWeight: FONT_WEIGHTS.bold,
  },
});
