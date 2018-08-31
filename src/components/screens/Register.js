import React, {Component} from 'react';
import {StyleSheet, Text,TextInput, View,Button} from 'react-native';
import config from '../../config'
export default class Register extends Component {
    constructor(props){
        super(props)
        this.updateText = this.updateText.bind(this)
        this.state={
            credentials:{
                email:'',
                password:''
            }
        }
    }
    updateText(text,field){
        console.log(text);
        let newCredential = Object.assign(this.state.credentials)
        newCredential[field] = text
        this.setState({
            credentials:newCredential
        })
    }
    register(){
        fetch(config.baseUrl+'signup', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.credentials),
        })
        .then((response) => response.json())
        .then(jsonResponse=>{
            if(jsonResponse.confirmation==="success"){
                this.props.navigation.navigate('main')
            }else{
                throw new Error({
                    message:'Sorry something went wrong ! Please try again'
                })
            }
        }).catch((err)=>{
            alert(err)
        });
    }
    render() {
        
        return (
        <View
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
            
            >
            <Text>Register page </Text>
            <TextInput
                autoCapitalize='none'
                value={this.state.credentials.email}
                autoCorrect={false}
                onChangeText={(text)=>this.updateText(text,'email')} 
                placeholder='Email' 
                style={styles.input}
             />
            <TextInput 
                autoCapitalize='none'
                value={this.state.credentials.password}
                autoCorrect={false}
                onChangeText={(text)=>this.updateText(text,'password')} 
                secureTextEntry 
                placeholder='Password' 
                style={styles.input} />
            <Button
                onPress={()=>this.register()}
                title='Sig Up' />
        </View>
      );
    }
}
const styles = StyleSheet.create({
    input:{
        height:50,
        width:'100%',
        paddingHorizontal:50,
        backgroundColor:'rgb(255,255,255)',
        marginBottom:10
    }
})