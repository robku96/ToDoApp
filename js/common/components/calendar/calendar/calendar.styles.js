import { StyleSheet } from 'react-native';
import Colors from '../../../colors/colors';
import Text from '../../../styles/text';

export default StyleSheet.create({
  visibleMonthAndYear: {
    ...Text.HeadingMain,
    fontWeight: 'bold',
    color: Colors.WHITE,
    backgroundColor: Colors.DARK_BLUE,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});