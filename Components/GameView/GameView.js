import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class GameView extends React.Component {

  render() {

    const { navigation } = this.props;
    const gameId = navigation.getParam('gameId', 'NO-ID');
    const otherStuff = navigation.getParam('otherStuff', 'idk man default');

    console.log(JSON.stringify(gameId));
    //<Text>gameId: {JSON.stringify(gameId)}</Text>
    //<Text>Stuff: {JSON.stringify(otherStuff)}</Text>

    return (
      <View style={styles.container}>
        <Text>Game screen here</Text>
        <Button
          title='Next Question'
          onPress={() => {
            this.props.navigation.push('Game', {
              gameId: Math.floor(Math.random() * 100),
            });
          }}
        />
        <Button
          title='End Game'
          onPress={() => this.props.navigation.navigate('Result')}
        />
      </View>
    );
  }
}