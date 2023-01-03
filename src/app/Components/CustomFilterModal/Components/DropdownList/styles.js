import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

export default StyleSheet.create({
  container: {
    width: '35%',
    height: 150,
    alignSelf: 'flex-end',
    backgroundColor: Colors.white,
    marginRight: '17%',
    borderRadius: 15,
  },
  touchable: {
    paddingVertical: 10,
    marginLeft: 8,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lighterGray,
  },
});
