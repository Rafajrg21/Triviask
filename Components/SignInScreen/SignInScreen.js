import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import styles from './styles';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const user = t.struct({
    username: t.String,
    password:  t.String
  })

  const options = {
    fields: {
      username: {
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false
      }
    }
  }

export default class SignInScreen extends React.Component {
    
  static navigationOptions = {
    title: 'Triviask!',
  };

  constructor(props) {
    super(props)
    this.state = {
      value: {
        username: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
      this.setState = {
        value: {
          username: '',
          password: null
        }
      }
  }
  
  _onChange = (value) => {
      this.setState({
        value
      })
  }
  
  _handleAdd = () => {
    const value = this.refs.form.getValue();

    if (value) {
      const data = {
        username: value.username,
        password: value.password,
      }

      const json = JSON.stringify(data)
        fetch('http://192.168.43.192:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: json
        })
        .then((response) => response.json())

        .then((res) => {
          if (res.error) {
            alert(res.error)
          } 
          else {
            AsyncStorage.setItem('jwt', res.token)
            alert(`Success! You can play now`)
            // Redirect to home screen
            this.props.navigation.navigate('App');
          }
        })
        .catch(() => {
          alert('There was an error logging in.');
        })
        .done()
    }
    else {
      // Form validation error
      alert('Please fix the errors listed and try again.')
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Form
          ref='form'
          options={options}
          type={user}
          value={this.state.value}
          onChange={this._onChange}
        />
        <Button 
          title="Sign in!" 
          style={styles.button}
          onPress={this._handleAdd} 
        />
        <Text style={[styles.textSeparetor, styles.centering]}>You don't have an account yet?</Text>
        <Button
          title='Sign up!'
          style={[styles.button, styles.greenButton]}
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }

}