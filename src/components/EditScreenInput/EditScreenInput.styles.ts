import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',

    paddingHorizontal: 5,
    paddingVertical: 3,
    marginBottom: 25,
  },
  label: {
    flexGrow: 1,
  },
  textInputContainer: {
    flexGrow: 4,
  },
  errorMessage: {
    color: COLORS.redDanger,
  },
});

export default styles;
