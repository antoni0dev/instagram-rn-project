import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

const styles = StyleSheet.create({
  flatListItem: {aspectRatio: 1},
  dotsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  dot: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: COLORS.lightGrey,
    margin: 5,
  },
  activeDot: {
    backgroundColor: COLORS.white,
  },
});

export default styles;
