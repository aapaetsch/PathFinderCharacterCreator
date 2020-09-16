import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';

//
// @props.text = Button Text
// @props.onPress = Button action
//
export class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPressIn={console.log('in')}
          onPressOut={console.log('out')}
          onPress={() => this.setState({ a: this.state.a + 1})}
        >
          <Text style={styles.btnTxt}>{this.state.a}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f0ae45',
    backgroundColor: '#f0ae45',
  },
  btnTxt:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  }
});


