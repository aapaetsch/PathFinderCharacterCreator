import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';


export default class CharacterCreator extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Button type='primary'>Hello</Button>
      </ScrollView>
    )
  }
}
