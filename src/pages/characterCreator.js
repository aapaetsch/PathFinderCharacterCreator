import React, { Component, createRef } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, List, WingBlank } from '@ant-design/react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class CharacterCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: {},
      race: {},
      usrClass: {},
      abilityScores: {},
      feats: {},
      equipment: {},
      skills: {},
      ptsRemaining: 0,
    }
    this.ref = createRef();
  }



  render() {
    return (
      <View>
        <List renderHeader={() => 'list title'}>
          <WingBlank>
            <Button style={styles.charBtn} type='primary'>Description</Button>
            <Button style={styles.charBtn} type='primary'>Race (Ancestry)</Button>
            <Button style={styles.charBtn} type='primary'>Class</Button>
            <Button
              style={styles.charBtn}
              type='primary'>
              Ability Scores
            </Button>
            <Button style={styles.charBtn} type='primary'>Skills</Button>
            <Button style={styles.charBtn} type='primary'>Feats</Button>
            <Button style={styles.charBtn} type='primary'>Equipment</Button>
          </WingBlank>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    paddingTop: '10%'
  },
  charBtn: {
    marginTop: '1%',
    marginBottom: '1%'
  }
})


