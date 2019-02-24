import {createStackNavigator} from 'react-navigation'
import MyTabBar from "./tabbar";

const MainStack = createStackNavigator(
    {
        Main: MyTabBar
    },
    {
        initialRoutName: 'Main'
    }

);
export  default  MainStack;