import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class HighScore extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Best of the Best</Text>
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title='Go Home'
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}