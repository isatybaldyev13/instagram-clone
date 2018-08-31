import React, {Component} from 'react';
import {View} from 'react-native';
import {MainFeed,Login,Register,Camera,Profile} from './components/screens';
import { StackNavigator,TabNavigator, SwitchNavigator } from 'react-navigation'



const IntroStack = StackNavigator({
    login:Login ,
    register:Register
    
})
const Tabs = TabNavigator({
    feed:MainFeed,
    camera:Camera,
    profile:Profile
})
const MainStack = SwitchNavigator({
    login:IntroStack,
    main:Tabs
})



export default class instaClone extends Component {
    render() {
      return (
          <MainStack  />

      );
    }
}

  
