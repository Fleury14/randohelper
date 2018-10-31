import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Footer } from '../common';

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  games: state.directory
});

class CurrentRaces extends Component {
  static navigationOptions = {
    title: 'Current Races',
    headerStyle: {
      backgroundColor: '#000099',
    },
    headerTintColor: '#eee'
  }

  renderGames() {
    return this.props.games.games.map(game => {
      const { title, srlAbbrev } = game;
      fetch(`http://api.speedrunslive.com/races?game=${srlAbbrev}`)
        .then(res => res.json())
        .then(data => {
          const myGame = data.races.filter(race => race.game.abbrev === srlAbbrev);
          console.log('game', game, myGame);
          return (
            <View style={{ width: '100%' }} key={srlAbbrev}>
              <Text>
                {title}
              </Text>
              <Text>
                {srlAbbrev}
              </Text>
            </View>
          );
        });
    });
  }

  render() {
    const { navigation } = this.props;
    console.log('props', this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.bodyContainer}>
          <Text>
            Current Races Screen
          </Text>
          {this.renderGames()}
        </View>
        <Footer
          navigation={navigation}
        />
      </View>
    )
  };
};

export default connect(mapStateToProps, null)(CurrentRaces);
