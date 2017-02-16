import React, {Component} from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import firebase from "firebase";

import reducers from "./reducers";
import {Header} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCVOWjAp8MYUIUgP_8rOe6f3N6x1zATSyg",
      authDomain: "manager-c0700.firebaseapp.com",
      databaseURL: "https://manager-c0700.firebaseio.com",
      storageBucket: "manager-c0700.appspot.com",
      messagingSenderId: "453227391886"
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider
        store={createStore(reducers)}>
        <View>
          <Header headerText={"Manager"}/>
          <LoginForm/>
        </View>
      </Provider>
    )
  }

}

export default App;
