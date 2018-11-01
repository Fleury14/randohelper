import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a1a0f9',
    padding: 20,
    marginBottom: 10,
    width: '100%',
    borderWidth: 3,
    borderColor: '#010059'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center'
  },
  numRaces: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center'
  }
});

const RaceItem = props => {
  const { title, numRaces } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.numRaces}>
        Number of Races:
        {numRaces}
      </Text>
    </View>
  );
};

export default RaceItem;
