import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    width: '82%',
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 22,
    paddingVertical: 16,
  },
  modalBackground: {
    backgroundColor: Colors.transparentBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {
    width: '95%',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    marginBottom: 30,
  },
  filterButton: {
    width: '90%',
    marginBottom: 40,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});
