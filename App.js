import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen' ;
import ListComponent from './src/screens/ListComponent'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    List : ListComponent

  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "List"
    }
  }
);

export default createAppContainer(navigator);
