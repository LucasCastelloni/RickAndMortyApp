import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  title: {
    fontSize: 15,
    color: Colors.darkGray,
    marginBottom: 7,
    marginLeft: 5,
    fontFamily: 'Roboto-Medium',
  },
  error: {
    color: Colors.error,
  },
  errorContainer: {
    flexDirection: 'row',
    height: 19,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  errorLabel: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.error,
  },
});
