import { StyleSheet } from 'react-native';
import Colors from '../../../colors/colors';

export default StyleSheet.create({
  container: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  containerActive: {
    borderBottomColor: Colors.WHITE,
  },
  day: {
    fontSize: 12,
  },
  date: {
    fontSize: 18,
  },
  text: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
  textActive: {
    color: Colors.WHITE,
  },
});