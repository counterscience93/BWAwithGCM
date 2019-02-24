import React, {Component} from 'react';
import {View,Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from '../../components/loginForm';
import {Button} from "@ant-design/react-native";
export default class Login extends Component{
    state ={}
    onPress = () => {
        this.props.navigation.navigate('SignUp');
    }
    render(){
        return (
           <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/cat.png')}
                    />
                    <Text style={styles.title}>     Bike world</Text>
                </View>
               <View style={styles.formContainer}>
                    <LoginForm/>
               </View>
           </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
        backgroundColor: '#3498db',
   },
    logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer:{
        //alignItems: 'center',
    },
    logo:{
        width: 100,
        height: 100,
    },
    title:{
       color: '#FFF',
        marginTop: 10,
        width: 140,
        opacity: 0.8,
    }
});