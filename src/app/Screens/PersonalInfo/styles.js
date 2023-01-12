/* eslint-disable comma-dangle */
import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  image: {
    width: 130,
    height: 130,
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
  imageContainer: {
    backgroundColor: Colors.basicGreen,
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 15,
  },
  title: {
    color: Colors.lightGray,
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Roboto-Medium',
  },
  info: {
    color: Colors.gray,
    fontSize: 18,
  },
  item: {
    marginBottom: 25,
  },
  infoContainer: {
    marginTop: 40,
  },
  hline: {
    width: '90%',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5,
  },
});
