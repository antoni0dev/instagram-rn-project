import {StyleSheet} from 'react-native';
import {FONT_SIZES, FONT_WEIGHTS} from '../../theme/fonts';
import {COLORS} from '../../theme/colors';

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  flexItem: {
    marginBottom: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfoItem: {
    alignItems: 'center',
  },
  profileInfoItemText: {
    fontSize: FONT_SIZES.l,
    fontWeight: FONT_WEIGHTS.bolder,
    color: COLORS.black,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  bioName: {
    fontSize: FONT_SIZES.l,
    fontWeight: FONT_WEIGHTS.bolder,
  },
  btnGroupWrapper: {
    flexDirection: 'row',
  },
});

export default styles;
