import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';
import {isAndroid} from '../../constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 22,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  text: {
    paddingLeft: 8,
    color: Colors.gray,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    paddingVertical: isAndroid ? 7 : 12,
  },
  error: {
    borderColor: Colors.error,
  },
});
