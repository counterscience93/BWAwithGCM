import React from 'react'
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet, Text
} from 'react-native'

export default class PhoneSignup extends React.Component {
    state = {
        phone_number: ''
    };
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    };
    signUp = async () => {
        const { phone_number } = this.state;
        try {
            // sign up
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    keyboardType="phone-pad"
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <TouchableOpacity
                    onPress={this.signUp}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3498db',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});