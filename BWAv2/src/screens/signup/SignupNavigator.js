import {createStackNavigator} from 'react-navigation'
import PhoneSignup from "./PhoneSignup";

const SignupStack = createStackNavigator(
    {
        SignUp: PhoneSignup
    },
    {
        initialRoutName: 'PhoneSignup'
    }

);
export  default  SignupStack;