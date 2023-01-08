import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 22,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  container: {
    width: '95%',
    backgroundColor: Colors.greenTone,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: Colors.white,
  },
  location: {
    fontSize: 13,
    color: Colors.gray,
    marginTop: 5,
    marginBottom: 5,
  },
  characterInfo: {
    marginLeft: 15,
  },
});

export default styles;
