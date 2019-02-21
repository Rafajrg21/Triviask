import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Triviask!</Text>
        <Button
          title='Play Game'
          onPress={() => this.props.navigation.navigate('Game')}
        />
      </View>
    );
  }
}
