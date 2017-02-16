import React, {Component} from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";

import reducers from "./reducers";
import {Header} from "./components/common";

class App extends Component {

  render(){
    return(
      <Provider
        store={createStore(reducers)}>
        <View>
          <Header headerText={"Manager"}/>
          <Text>
            Hello from the app
          </Text>
        </View>
      </Provider>
    )
  }

}

export default App;
