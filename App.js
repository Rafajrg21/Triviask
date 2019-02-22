import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import GameView from './Components/GameView/GameView';
import HighScore from './Components/HighScore/HighScore';
import Result from './Components/Result/Result';
import AuthLoadingScreen from './Components/AuthLoadingScreen/AuthLoadingScreen';
import SignInScreen from './Components/SignInScreen/SignInScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameView,
    HighScore: HighScore,
    Result: Result
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2e31e8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },  
    },
  }
);

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen ,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2e31e8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
