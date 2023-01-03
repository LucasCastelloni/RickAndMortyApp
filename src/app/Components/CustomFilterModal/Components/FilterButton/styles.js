import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

export default StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: Colors.neutralBlue,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  filterLabel: {
    color: Colors.white,
    fontSize: 15,
    marginRight: 6,
    borderRightWidth: 1,
    borderColor: Colors.white,
    paddingRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.neutralBlue,
  },
});
