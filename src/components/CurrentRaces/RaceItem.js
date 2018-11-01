import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#260056',
    padding: 20,
    marginBottom: 10,
    width: '100%',
    borderWidth: 3,
    borderColor: '#330074'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#eee'
  },
  numRaces: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: '#eee'
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
