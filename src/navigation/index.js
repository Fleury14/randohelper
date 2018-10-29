import { createStackNavigator } from 'react-navigation';
import { Main, Settings, CurrentRaces, PlayerStats } from '../components';

const RootStack = createStackNavigator(
  {
    Home: Main
  },
  {
    CurrentRaces
  },
  {
    Settings
  },
  {
    PlayerStats
  },
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
