import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Game Finished!
        
        This is your result: 
        </Text>
        <Button
          title='See HighScore Table'
          onPress={() => this.props.navigation.navigate('HighScore')}
        />
        <Button
          title='Go home!'
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
