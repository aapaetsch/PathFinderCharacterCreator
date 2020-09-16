import React, { Component } from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';
import { List } from '@ant-design/react-native';
import CharListItem from '../components/characterListItem';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('hello', this.props)
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Button
          style={styles.headerBtn}
          onPress={this.props.logout}
          title='Logout'
        />
      ),
      headerRight: () => (
        <Button
          style={styles.headerBtn}
          onPress={() => this.props.navigation.navigate('Character Creator')}
          title={`Add New`}
        />
      ),
    })
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
  },
  headerBtn: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 4,
    marginRight: 4
  },
})
