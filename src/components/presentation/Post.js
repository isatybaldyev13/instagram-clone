import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import config from '../../config';


export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            liked:false,
            screenWidth:Dimensions.get("window").width
        }
    }
    likeToogled(){
        this.setState({
            liked:!this.state.liked
        })
    }
    render() {
        const imageUrl = 
            this.props.item%2 == 0
            ? "https://lh3.googleusercontent.com/eDhCHEisue-jhVPqeQezkC64eTgGAUVBcZn6X1i3QVHMOhyJ9B-YF9OOxpdhFONH5bMv1_jJFBhltX5c2rP6aomqyA"
            :"https://lh3.googleusercontent.com/rNQZz3nlzqP9sZ5BLO2v3lg8_tcpVrbbtziNjPrF7GFjekqcY-L31GKnD2OXGlBFtYVFgrHuHSpZOqdg7TglKVthkQM"
        const imageHeight = Math.floor(this.state.screenWidth*1.1)
        const imageUri = imageUrl+"=s"+imageHeight+"-c"
        const heartIconColor = (this.state.liked)?'rgb(252,61,57)':null
      return (
        <View>
            <View style={styles.userBar}>
                <View style={styles.userBarLeftContent}>
                    <Image 
                        style={styles.userPic}
                        source={{
                            uri:'https://lh3.googleusercontent.com/cpN-A5snh64wVdr2hJHh9m9edsVcFfoKMFVXozhYK_49OXwFuVRU5qq68SmVmjPYTT4d_YIb1B-J1E8SYds4pC1I0w'
                        }}
                    />
                    <Text style={{marginLeft:10}}>Diana Korkunova   </Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{
                         fontSize:30

                    }}>...</Text>
                </View>
            </View>
            <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>{this.likeToogled()}}>
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
                </TouchableOpacity>
            <View style={styles.iconBar}>             
                <Image
                        style={[styles.icon,
                            {height:40,width:40,tintColor:heartIconColor}
                        ]}
                        source={config.images.heartIcon} 
                    />
                <Image
                    style={[styles.icon,{height:40,width:40}]}
                    source={config.images.chatIcon} 
                />
                 <Image
                    resizeMode='stretch'
                    style={[styles.icon,{height:50,width:40}]}
                    source={config.images.bubbleIcon} 
                />
            </View>
            <View style={styles.iconBar}>
                <Image
                    style={[styles.icon,
                        {height:30,width:30}
                    ]}
                    source={config.images.heartIcon} 
                />
                <Text>128 likes</Text>
            </View>
        </View>
      );
    }
}


const styles= StyleSheet.create({
    userBar:{
        width:'100%',
        height:config.styleConstants.rowHeight,
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
    },
    iconBar:{
        width:'100%',
        height:config.styleConstants.rowHeight,
        borderColor:"rgb(233,233,233)",
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        marginLeft:5
    }
})

  
