import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";

export class Button extends Component {

  render(){
    const {buttonStyle, textStyle} = styles;
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        style={buttonStyle}>
        <Text style={textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }

}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007AFF',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    height: 40
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aaf',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}
