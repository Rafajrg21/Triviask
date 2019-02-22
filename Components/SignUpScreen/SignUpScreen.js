import React from 'react';
import { Button, ScrollView } from 'react-native';
import styles from './styles';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const newUser = t.struct({
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

export default class SignUpScreen extends React.Component {
    
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
        // If the form is valid
        if (value) {
          const data = {
            username: value.username,
            password: value.password,
          }
          // Serialize and post the data
          const json = JSON.stringify(data);
          fetch('http://192.168.43.192:3000/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: json
          })
          .then((response) => response.json())
          .then(() => {
            alert('Success! You may now log in.');
            // Redirect to home screen
            this.props.navigation.navigate('App');
          })
          .catch((error) => {
            alert('There was an error creating your account.');
          })
          .done()
        } else {
          // Form validation error
          alert('Please fix the errors listed and try again.')
        }
      }
    

    static navigationOptions = {
      title: 'Join us!',
    };
  
    render() {
      return (
        <ScrollView style={styles.container}>
            <Form
            ref='form'
            type={newUser}
            options={options}
            value={this.state.value}
            onChange={this._onChange}
            />
            <Button 
                title='Create account'
                style={[styles.button, styles.greenButton]}
                onPress={this._handleAdd}
            />
        </ScrollView>
      );
    }
}