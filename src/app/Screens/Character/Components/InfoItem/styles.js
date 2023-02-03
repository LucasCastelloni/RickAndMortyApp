import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  info: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.darkGray,
  },
  container: {
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
