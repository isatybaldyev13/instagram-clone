import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Dimensions} from 'react-native';


export default class instaClone extends Component {
    constructor(props){
        super(props)
        this.state={
            screenWidth:Dimensions.get("window").width
        }
    }
    render() {
        const imageHeight = Math.floor(this.state.screenWidth*1.1)
        const imageUri = "https://lh3.googleusercontent.com/cpN-A5snh64wVdr2hJHh9m9edsVcFfoKMFVXozhYK_49OXwFuVRU5qq68SmVmjPYTT4d_YIb1B-J1E8SYds4pC1I0w"+"=s"+imageHeight+"-c"
      return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text>Instagram</Text>
            </View>
            <View style={styles.userBar}>
                <View style={styles.userBarLeftContent}>
                    <Image 
                        style={styles.userPic}
                        source={{
                            uri:'https://lh3.googleusercontent.com/cpN-A5snh64wVdr2hJHh9m9edsVcFfoKMFVXozhYK_49OXwFuVRU5qq68SmVmjPYTT4d_YIb1B-J1E8SYds4pC1I0w'
                        }}
                    />
                    <Text style={{marginLeft:10}}>Alex Mamasaliev</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{
                         fontSize:30

                    }}>...</Text>
                </View>
            </View>
            <Image 
                style={{
                    height:400,
                    width:this.state.screenWidth
                }}
                source=
                {{
                    uri:imageUri
                }} 
            />
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
    },
    userBar:{
        width:'100%',
        height:50,
        backgroundColor:"rgb(255,255,255)",
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    userBarLeftContent:{
        flexDirection:'row',
        alignItems:'center'
    },
    userPic:{
        height:40,
        width:40,
        borderRadius:20
    }
})

  
