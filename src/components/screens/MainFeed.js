import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PostFeed} from '../container';



export default class MainFeed extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text>Instagram</Text>
            </View>
            <PostFeed />
        </View>
      );
    }
}

const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F5FCFF'
    },
    navBar:{
        width:'100%',
        height:56,
        marginTop:20,
        backgroundColor:"rgb(250,250,250)",
        borderBottomColor:"rgb(233,233,233)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        justifyContent:'center',
        alignItems:'center'
    }
})

  
