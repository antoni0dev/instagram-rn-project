import {StyleSheet} from 'react-native';
import {FONT_WEIGHTS} from '../../theme/fonts';

export const styles = StyleSheet.create({
  screenItem: {
    padding: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftSideWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftSideName: {
    marginLeft: 10,
  },
  contentImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footerIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeftIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  footerRightIconWrapper: {
    flex: 2.5,
    alignItems: 'flex-end',
  },
  footerItem: {
    marginBottom: 5,
  },
  footerCommentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerComemntsText: {
    flex: 1,
  },

  boldText: {
    fontWeight: FONT_WEIGHTS.bold,
  },
});
