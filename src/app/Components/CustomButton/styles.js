import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';
import {isIos} from '../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: isIos ? 12 : 9,
    backgroundColor: Colors.basicGreen,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  disabled: {
    backgroundColor: Colors.lightGray,
  },
});
