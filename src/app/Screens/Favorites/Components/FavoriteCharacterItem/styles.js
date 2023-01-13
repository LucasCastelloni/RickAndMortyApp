import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 22,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    marginLeft: 10,
    marginVertical: 15,
  },
  container: {
    width: '95%',
    backgroundColor: Colors.greenTone,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
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
  touchable: {
    backgroundColor: Colors.transparentBackground,
    alignSelf: 'flex-end',
    flex: 1,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 22,
    borderTopRightRadius: 22,
  },
  button: {
    flex: 1,
    height: '100%',
  },
  deleteButton: {
    backgroundColor: Colors.basicRed,
    borderRadius: 6,
    justifyContent: 'center',
    width: 60,
    alignItems: 'center',
    marginRight: 5,
  },
  seeMore: {
    backgroundColor: Colors.orange,
    borderRadius: 6,
    justifyContent: 'center',
    width: 60,
    alignItems: 'center',
  },
  hiddenButtons: {
    position: 'absolute',
    right: '4%',
    flexDirection: 'row',
    zIndex: -1,
    height: '90%',
  },
  seeMoreLabel: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
  },
});

export default styles;
