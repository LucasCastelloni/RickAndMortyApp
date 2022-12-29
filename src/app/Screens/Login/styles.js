import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  fieldsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  field: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 170,
    position: 'absolute',
    //resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  titleContainer: {
    height: 150,
    justifyContent: 'center',
  },
  button: {
    width: '85%',
    alignSelf: 'center',
  },
});
