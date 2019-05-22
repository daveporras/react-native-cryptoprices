import React from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyles';

const { headerContainer, headerText } = styles;

export default () => (
  <View style={headerContainer}>
    <Text style={headerText}>Crypto Prices</Text>
  </View>
);
