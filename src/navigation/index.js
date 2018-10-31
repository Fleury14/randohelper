import { createStackNavigator } from 'react-navigation';
import { Main, Settings, CurrentRaces, PlayerStats } from '../components';

const RootStack = createStackNavigator(
  {
    Home: Main,
    CurrentRaces,
    PlayerStats,
    Settings
  },
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
