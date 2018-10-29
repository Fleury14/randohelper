import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Footer } from '../common';

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class CurrentRaces extends Component {
  render() {
    console.log('props', this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.bodyContainer}>
          <Text>
            Current Races Screen
          </Text>
        </View>
        <Footer />
      </View>
    )
  };
};

export default CurrentRaces;
