import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginBottom: 5,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '98%',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGray,
  },
  number: {
    fontWeight: '700',
    color: Colors.basicGreen,
    fontSize: 17,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    color: Colors.lightGray,
    marginHorizontal: 3,
    fontSize: 16,
  },
});

export default styles;
