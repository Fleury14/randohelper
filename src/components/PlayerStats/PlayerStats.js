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

class PlayerStats extends Component {
  static navigationOptions = {
    title: 'Player Stats',
    headerStyle: {
      backgroundColor: '#000099',
    },
    headerTintColor: '#eee'
  }
  render() {
    const { navigation } = this.props;
    console.log('props', this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.bodyContainer}>
          <Text>
            Current Races screen
          </Text>
        </View>
        <Footer
          navigation={navigation}
        />
      </View>
    )
  };
};

export default PlayerStats;
