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
    borderBottomColor: Colors.white,
  },
  day: {
    fontSize: 12,
  },
  date: {
    fontSize: 18,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
  textActive: {
    color: Colors.white,
  },
});