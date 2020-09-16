import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from '@ant-design/react-native';
import CharListItem from '../components/characterListItem';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <List renderHeader={ () => 'Character List'}>
          <ScrollView style={styles.charListWrapper}>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
            <CharListItem name="George"/>
          </ScrollView>
        </List>
    );
  }
}

const styles = StyleSheet.create({
  charListWrapper: {
    width: '100%',
    height: '100%'
  }
})
