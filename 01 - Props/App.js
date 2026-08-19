import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let nome = 'Steve';

    return (<View>
      <Text>Hello World</Text>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}> Hello Again </Text>
      <Text style={{ fontSize: 40 }}>{nome}</Text>

      <Jobs altura={200} largura={500} nomeando="Steve Jobs"/>
    </View>
    );
  }
}

export default App;

class Jobs extends Component {
  render() {
    let image = 'https://blog.ibyte.com.br/wp-content/uploads/2013/09/Steve-jobs-destaque.jpg';

    return (
      <View>
      <Image
        source={{ uri: image }}
        style={{ width: this.props.largura, height: this.props.altura }}
      />

<Text>{this.props.nomeando}</Text>
</View>
    );
  }
}