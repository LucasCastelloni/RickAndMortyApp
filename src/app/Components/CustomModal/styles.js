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
    color: Colors.lightGray,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 25,
  },
  icon: {
    marginBottom: 12,
    marginTop: 5,
  },
});
