import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import styles from './styles';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Triviask!</Text>
        <Button
          title='Play Game'
          onPress={this.goToGame}
        />
        <Button
          title='Sign Out'
          onPress={this._handleLogOut}
        />
      </View>
    );
  }

  goToGame = () => {
    this.props.navigation.navigate('Game', {
      gameId: 15,
      otherStuff: 'literally anything',
    });
  };


  _handleLogOut = () => {
    AsyncStorage.removeItem('jwt');
    alert('You have been logged out.');
    this.props.navigation.navigate('Auth');
}
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
