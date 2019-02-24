import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
class LoginForm extends Component{
    state = {

    };
    OnpressSignUp = () => {
        this.props.navigation.navigate('SignUp')
    };

    render(){
        return (
          <View style={styles.container}>
              <StatusBar
                barStyle="light-content"
              />
              <TextInput
                  placeholder="Phone number"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
              />
              <TextInput
                  placeholder="password"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  ref={(input) => this.passwordInput = input}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}
                                onPress={this.OnpressSignUp}
              >
                  <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>

          </View>
        );
    }
}
const styles = StyleSheet.create({
   container: {
        padding: 20,
   },
    input:{
       height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});

export default withNavigation(LoginForm);