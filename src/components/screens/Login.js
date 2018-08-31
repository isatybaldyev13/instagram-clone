import React, {Component} from 'react';
import {StyleSheet, Text,TextInput, View,Button} from 'react-native';
import config from '../../config'
export default class Login extends Component {
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
    login(){
        let credentials = this.state.credentials
        credentials.email=credentials.email.toLowerCase()
        fetch(config.baseUrl+'login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        })
        .then((response) => response.json())
        .then(jsonResponse=>{
            if(jsonResponse.confirmation==="success"){
                this.props.navigation.navigate('main')
            }else{
                throw new Error(jsonResponse.message)
            }
        }).catch((err)=>{
            alert(JSON.stringify(err.message))
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
            <Text>Login page </Text>
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
                onPress={()=>this.login()}
                title='Login' />
             <Button
                onPress={()=>this.props.navigation.navigate('register')}
                title='No account ? Sign up here ' />
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