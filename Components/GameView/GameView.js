import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class GameView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Game screen here</Text>
        <Button
          title='Next Question'
          onPress={() => this.props.navigation.push('Game')}
        />
        <Button
          title='End Game'
          onPress={() => this.props.navigation.navigate('Result')}
        />
      </View>
    );
  }
}