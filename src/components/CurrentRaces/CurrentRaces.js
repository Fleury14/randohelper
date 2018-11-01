import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Footer } from '../common';
import RaceItem from'./RaceItem';

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

  state = {
    srlData: [],
  };

  componentDidMount() {
    this.props.games.games.map(async game => {
      const { title, srlAbbrev } = game;
      await fetch(`http://api.speedrunslive.com/races?game=${srlAbbrev}`)
        .then(res => res.json())
        .then(data => {
          const myGame = data.races.filter(race => race.game.abbrev === srlAbbrev);
          const gameObj = {
            races: myGame,
            title,
            srlAbbrev
          };
          // console.log('game', game, myGame);
          this.setState(prevState => ({
            srlData: [...prevState.srlData, gameObj]
          }));
        });
    });
  }

  renderGames() {
    console.log('state', this.state);
    return this.state.srlData.map(game => {
      const { title, srlAbbrev } = game;
      return (
        <View style={{ alignSelf: 'stretch', justifyContent: 'center' }} key={srlAbbrev}>
          <RaceItem
            title={title}
            numRaces={game.races.length}
          />
        </View>
      );
    });
  }

  render() {
    const { navigation } = this.props;
    console.log('props', this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.bodyContainer}>
          {this.renderGames()}
        </View>
        <Footer
          navigation={navigation}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(CurrentRaces);
