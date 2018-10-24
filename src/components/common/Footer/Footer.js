import React from 'react';
import { View, Text } from 'react-native';

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
        <Text style={styles.footerText}>
          Home
        </Text>
      </View>
      <View>
        <Text style={styles.footerText}>
          Player Stats
        </Text>
      </View>
      <View>
        <Text style={styles.footerText}>
          Current Races
        </Text>
      </View>
      <View>
        <Text style={styles.footerText}>
          Settings
        </Text>
      </View>
    </View>
  );
};

export { Footer };
