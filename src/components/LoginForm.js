 import React,{Component} from "react";
 import {View,Text} from "react-native";
 import {connect} from "react-redux";

 import * as actions from "../actions/index";
 import {CardSection,Button} from "./common";

 class LoginForm extends Component {

   handleNewUser(){
     this.props.userNew();
   }

   handleShowUser(){
     this.props.userInfo()
     console.log(this.props.user);
   }

   render(){
     console.log(this.props);
     return(
       <View>
         <Text>Hello from login form</Text>
         <CardSection>
           <Button onPress={this.handleNewUser.bind(this)}>Add new User</Button>
         </CardSection>
         <CardSection>
           <Button onPress={this.handleShowUser.bind(this)}>Show User</Button>
         </CardSection>
       </View>
     )
   }

 }

 mapStateToProps = (state)=>{
   return {
     user: state.user
   }
 }

 export default connect (mapStateToProps,actions)(LoginForm)
