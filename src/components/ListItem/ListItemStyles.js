import { StyleSheet } from 'react-native';
import {
  MIDNIGHT,
  WHITE,
  GREY_CHATEAU,
  ELF_GREEN,
} from '../../utils/variables';

export default StyleSheet.create({
  listItemContainer: {
    backgroundColor: MIDNIGHT,
    padding: 15,
    marginVertical: 1,
    flexDirection: 'row',
  },
  assetImage: {
    width: 40,
    height: 40,
  },
  assetSymbol: {
    color: WHITE,
    fontSize: 20,
  },
  assetName: {
    color: GREY_CHATEAU,
    fontSize: 12,
  },
  priceContainer: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceText: {
    color: ELF_GREEN,
    fontSize: 20,
  },
});
