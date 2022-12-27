import {StyleSheet} from 'react-native';
import Colors from '../../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutralBlue,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  disabled: {
    backgroundColor: Colors.lightGray,
  },
});

export default styles;
