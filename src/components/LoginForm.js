import React,{Component} from "react";
import {View,Text} from "react-native";
import {connect} from "react-redux";

import * as actions from "../actions/index";
import {Card,CardSection,Input,Button, Spinner} from "./common";

class LoginForm extends Component {

 onButtonPress(){
   let {email,password,loginUser} = this.props;
   loginUser({email:email,password:password})
 }

 onEmailChange(text){
   this.props.emailChanged(text)
 }
 onPasswordChange(text){
   this.props.passwordChanged(text)
 }

 renderButton(){
   if(this.props.loading){
     return <Spinner/>
   }
   return(
     <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
   )
 }

 render(){
   return(
     <Card>
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
           placeholder={"password"}
           onChangeText={this.onPasswordChange.bind(this)}
           value={this.props.password}/>
       </CardSection>

       <Text style={styles.errorTextStyle}>{this.props.error}</Text>

       <CardSection>
         {this.renderButton()}
       </CardSection>
     </Card>
   )
 }

}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

mapStateToProps = (state)=>{
  const {email,password,user,error,loading} = state.auth;
  return {
   email: email,
   password: password,
   user: user,
   error: error,
   loading: loading
  }
}

export default connect (mapStateToProps,actions)(LoginForm)
