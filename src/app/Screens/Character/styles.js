import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  imageContainer: {
    backgroundColor: Colors.neutralBlue,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  nameLabel: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 25,
    marginBottom: 10,
  },
});

export default styles;
