import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShow from './src/screens/ResultShowScreen';

const navigator = createStackNavigator(
{
  Search:SearchScreen,
  ResultShow:ResultShow
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);