import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = {
  footerContainer: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#000099',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerText: {
    color: '#eee'
  }
};

const Footer = (props) => {
  return (
    <View style={styles.footerContainer}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigate('Home')}
        >
          <Text style={styles.footerText}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigate('PlayerStats')}
        >
          <Text style={styles.footerText}>
            Player Stats
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigate('CurrentRaces')}
        >
          <Text style={styles.footerText}>
            Current Races
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigate('Settings')}
        >
          <Text style={styles.footerText}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Footer };
