import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      // justifyContent pode aceitar center, flex end, space-between, space-around etc
      // flexDirection pode aceitar row, column etc
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }}></View>
      </View>
    );
  }
}

export default App;