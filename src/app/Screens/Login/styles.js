import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  fieldsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  field: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 146,
    position: 'absolute',
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
    height: 135,
    justifyContent: 'center',
  },
  button: {
    width: '82%',
    alignSelf: 'center',
  },
  socialLabel: {
    color: Colors.lightGray,
    fontFamily: 'Roboto-Medium',
    marginTop: 22,
    marginBottom: 15,
    fontSize: 16,
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hline: {
    flex: 1,
    width: '90%',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 30,
    alignSelf: 'center',
  },
  googleIcon: {
    padding: 4,
    borderRadius: 50,
  },
});
