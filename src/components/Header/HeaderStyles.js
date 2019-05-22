import { StyleSheet } from 'react-native';
import { WHITE, MIDNIGHT } from '../../utils/variables';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: MIDNIGHT,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerText: {
    color: WHITE,
    fontWeight: 'bold',
  },
});
