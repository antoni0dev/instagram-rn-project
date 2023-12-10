import {StyleSheet} from 'react-native';
import {FONT_WEIGHTS} from '../../theme/fonts';

const styles = StyleSheet.create({
  commentWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  boldText: {
    fontWeight: FONT_WEIGHTS.bold,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 5,
  },
  middleColumnWrapper: {
    flex: 1,
  },
  footerWrapper: {
    flexDirection: 'row',
  },
  footerItem: {
    marginHorizontal: 5,
  },
});

export default styles;
