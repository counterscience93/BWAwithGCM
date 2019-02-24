/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoginStack from "./src/screens/login/LoginNavigator";
import SignupStack from "./src/screens/signup/SignupNavigator";
import MainStack from "./src/screens/main/MainNavigator";
const AppNavigator = createSwitchNavigator(
    {
        Main: MainStack,
        Login: LoginStack,
        SignUp: SignupStack,
    },
    {
        initialRoutName: 'Main',
    }
);
const AppContainer = createAppContainer(AppNavigator);
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}
