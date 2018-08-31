import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';

export default class Profile extends Component {
    login(){
        this.props.navigation.navigate('main')
    }
    render() {
        
        return (
        <TouchableOpacity
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
            onPress={()=>this.login()}
            >
            <Text>Profile page </Text>
          
        </TouchableOpacity>
      );
    }
}