import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import { string, number, oneOfType } from 'prop-types';
import styles from './ListItemStyles';

const {
  listItemContainer,
  assetImage,
  assetSymbol,
  assetName,
  priceContainer,
  priceText,
} = styles;

export default class ListItem extends PureComponent {
  static propTypes = {
    img: string.isRequired,
    asset: string.isRequired,
    name: string.isRequired,
    price: oneOfType([string, number]).isRequired,
  }

  render() {
    const {
      img, asset, name, price,
    } = this.props;
    return (
      <TouchableOpacity>
        <View style={listItemContainer}>
          <View style={{ flex: 1 }}>
            <Image source={{ uri: img }} style={assetImage} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={assetSymbol}>{ asset }</Text>
            <Text style={assetName}>{ name }</Text>
          </View>
          <View style={priceContainer}>
            <Text style={priceText}>{ `$${price}` }</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
