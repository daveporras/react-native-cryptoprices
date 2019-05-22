import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Picker,
} from 'react-native';
import Header from './components/Header';
import { TIBER, WHITE } from './utils/variables';
import ListItem from './components/ListItem';

export default class Root extends Component {
  state = {
    cryptoCurrencies: [
      { asset: 'BTC', name: 'Bitcoin', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
      { asset: 'ETH', name: 'Ethereum', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
      { asset: 'LTC', name: 'Litecoin', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png' },
      { asset: 'BCH', name: 'Bitcoin Cash', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png' },
      { asset: 'ETC', name: 'Ethereum Classic', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png' },
      { asset: 'XLM', name: 'Stellar', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png' },
      { asset: 'XRP', name: 'Ripple', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png' },
      { asset: 'ZRX', name: '0x', img: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1896.png' },
    ],
    prices: [],
    selectedCurrency: 'USD',
    currencies: ['USD', 'CLP', 'ARS'],
  }

  componentDidMount() {
    this.getPrices();
    setInterval(() => this.getPrices(), 5000);
  }

  getPrices = () => {
    const { cryptoCurrencies, prices, selectedCurrency } = this.state;
    cryptoCurrencies.map(async (currency) => {
      const { data } = await (await fetch(`https://api.coinbase.com/v2/prices/${currency.asset}-${selectedCurrency}/buy`)).json();
      prices[currency.asset] = data.amount;
      this.setState({ prices });
      // console.log(this.state.prices);
    });
  }

  renderItem = ({ item }) => {
    const { asset, img, name } = item;
    const { prices } = this.state;
    return <ListItem asset={asset} img={img} name={name} price={prices[asset] || 0} />;
  }

  keyExtractor = (_, index) => index.toString();

  onValueChange = (selected) => {
    this.setState({ selectedCurrency: selected }, () => this.getPrices());
  }

  render() {
    const { cryptoCurrencies, selectedCurrency, currencies } = this.state;
    return (
      <View style={{ backgroundColor: TIBER, flex: 1 }}>
        <Header />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: WHITE, fontSize: 16 }}>Change Currency: </Text>
          <Picker
            selectedValue={selectedCurrency}
            style={{ width: 50, height: 44 }}
            itemStyle={{ height: 44, color: WHITE }}
            onValueChange={selected => this.onValueChange(selected)}
          >
            { currencies.map(item => <Picker.Item key={item} label={item} value={item} />) }
          </Picker>
        </View>
        <ScrollView>
          <FlatList
            data={cryptoCurrencies}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            extraData={this.state}
          />
        </ScrollView>
      </View>
    );
  }
}
