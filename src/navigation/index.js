import { createStackNavigator } from 'react-navigation';
import Main from '../components';

const RootStack = createStackNavigator({
  Home: Main
});

export default RootStack;
