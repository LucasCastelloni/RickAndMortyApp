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
  button: {
    backgroundColor: Colors.orange,
    width: '80%',
  },
  touchable: {
    backgroundColor: Colors.orange,
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    marginTop: -20,
    marginLeft: 16,
  },
  photoButton: {
    backgroundColor: Colors.neutralBlue,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingVertical: 8,
    width: '70%',
    paddingHorizontal: 10,
  },
  photoLabel: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 7,
  },
});
