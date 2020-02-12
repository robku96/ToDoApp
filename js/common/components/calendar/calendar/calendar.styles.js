import { StyleSheet } from 'react-native';
import Colors from '../../../colors/colors';
import Text from '../../../styles/text';

export default StyleSheet.create({
  visibleMonthAndYear: {
    ...Text.HeadingMain,
    color: Colors.white,
    backgroundColor: Colors.darkBlue,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});