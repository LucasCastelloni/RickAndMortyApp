import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  container: {
    width: '30%',
    backgroundColor: Colors.orange,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: Colors.white,
    textAlign: 'center',
  },
  location: {
    fontSize: 13,
    textAlign: 'center',
    color: Colors.gray,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
