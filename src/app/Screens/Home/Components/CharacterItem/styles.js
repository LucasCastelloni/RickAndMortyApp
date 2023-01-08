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
    width: '31%',
    backgroundColor: Colors.orange,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    color: Colors.white,
    textAlign: 'center',
    height: 22,
    marginTop: 5,
  },
  status: {
    fontSize: 13,
    textAlign: 'center',
    color: Colors.darkGray,
    marginTop: 8,
    marginBottom: 8,
  },
  touchable: {
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  itemButtons: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreButton: {
    flexDirection: 'row',
    backgroundColor: Colors.transparentBackground,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 6,
    alignItems: 'center',
  },
  seeMoreLabel: {
    color: Colors.white,
    marginRight: 4,
  },
});

export default styles;
