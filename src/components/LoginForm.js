import React,{Component} from "react";
import {View,Text} from "react-native";
import {connect} from "react-redux";

import * as actions from "../actions/index";
import {Card,CardSection,Input,Button} from "./common";

class LoginForm extends Component {

 handleNewUser(){
 }

 handleShowUser(){
   console.log(this.props.user);
 }

 handleLogin(){
   console.log('Login!!')
 }

 onEmailChange(text){
   this.props.emailChanged(text)
 }

 render(){
   //placeholder,value,onChangeText
   console.log(this.props);
   return(
     <Card>
       <View>
         <CardSection>
           <Input
             label={"Email"}
             placeholder={"example@gmail.com"}
             onChangeText={this.onEmailChange.bind(this)}/>
         </CardSection>

         <CardSection>
           <Input
             secureTextEntry
             label={"Password"}
             placeholder={"password"}/>
         </CardSection>

         <CardSection>
           <Button onPress={this.handleLogin.bind(this)}>Login</Button>
         </CardSection>

         <CardSection>
           <Button onPress={this.handleNewUser.bind(this)}>Add new User</Button>
         </CardSection>

         <CardSection>
           <Button onPress={this.handleShowUser.bind(this)}>Show User</Button>
         </CardSection>
       </View>
     </Card>
   )
 }

}

mapStateToProps = (state)=>{
 return {
   auth: state.auth
 }
}

export default connect (mapStateToProps,actions)(LoginForm)
