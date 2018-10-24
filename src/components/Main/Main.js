import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  render() {
    console.log('main rendering... i think?');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
        <Text>
          Main screen
        </Text>
      </View>
    )
  };
};

export default Main;
