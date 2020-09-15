import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.charListWrapper}>
        <Text h1 >Hello world</Text>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  charListWrapper: {
    width: '100%'
  }
})