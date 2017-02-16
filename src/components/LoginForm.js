 import React,{Component} from "react";
 import {View,Text} from "react-native";
 import {connect} from "react-redux";

 import * as actions from "../actions";

 class LoginForm extends Component {

   render(){
     return(
       <View>
         <Text>Hello from login form</Text>
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
