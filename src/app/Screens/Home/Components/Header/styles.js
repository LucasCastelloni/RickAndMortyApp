import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.basicGreen,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 22,
  },
  label: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    marginTop: 20,
    marginBottom: 10,
  },
  innerContainer: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default styles;
