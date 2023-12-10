import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONT_SIZES, FONT_WEIGHTS} from '../../theme/fonts';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  image: {
    width: 40,
    borderRadius: 20,
    aspectRatio: 1,
    alignSelf: 'flex-end',
  },
  input: {
    flex: 1,
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingRight: 50,
    paddingVertical: 5,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: FONT_SIZES.s,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
});

export default styles;
