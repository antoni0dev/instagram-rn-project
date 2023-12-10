import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  camera: {width: '100%', aspectRatio: 3 / 4},
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    position: 'absolute',
  },
  recordingCircle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: COLORS.white,
  },
});

export default styles;
