import React,{Component} from "react";
import {View,Text} from "react-native";
import {connect} from "react-redux";

import * as actions from "../actions/index";
import {Card,CardSection,Input,Button} from "./common";

class LoginForm extends Component {

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
             onChangeText={this.onEmailChange.bind(this)}
             value={this.props.email}/>
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
       </View>
     </Card>
   )
 }

}

mapStateToProps = (state)=>{
 return {
   email: state.auth.email
 }
}

export default connect (mapStateToProps,actions)(LoginForm)
