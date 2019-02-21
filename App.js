import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import GameView from './Components/GameView/GameView';
import HighScore from './Components/HighScore/HighScore';
import Result from './Components/Result/Result';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameView,
    HighScore: HighScore,
    Result: Result
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
