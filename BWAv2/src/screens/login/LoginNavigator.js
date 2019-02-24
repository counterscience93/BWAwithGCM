import {createStackNavigator} from 'react-navigation'
import Login from "./login";

const LoginStack = createStackNavigator(
    {
        SignIn: Login
    },
    {
        initialRoutName: 'SignIn'
    }

);
export  default  LoginStack;