import { createStackNavigator } from 'react-navigation';
import { Main } from '../components';

const RootStack = createStackNavigator({
  Home: Main
},
{
  initialRouteName: 'Home'
});

export default RootStack;
