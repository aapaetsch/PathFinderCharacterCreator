import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, List, WingBlank } from '@ant-design/react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbilityScoresComponent from "../components/abilityScoresComponent";
import BaseStatsDrawer from "../components/baseStatsDrawer";

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
      showStatDrawer: false,
      drawerContents: <AbilityScoresComponent/> ,
    }
  }

  toggleStatDrawer = () => {
    this.setState({ showStatDrawer: !this.state.showStatDrawer});
  }

  setDrawer = (type) => {
    this.setState({drawerContents: <AbilityScoresComponent/> });

    this.toggleStatDrawer();
  }



  render() {
    return (
      <View>
        <BaseStatsDrawer open={this.state.showStatDrawer} sidebar={this.state.drawerContents}>
        <List renderHeader={() => 'list title'}>
          {/*<BaseStatsDrawer />*/}

          <WingBlank>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('desc')}>
              Description
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('race')}>
              Race (Ancestry)
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('class')}>
              Class
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('ability')}>
              Ability Scores
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('skill')}>
              Skills
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('feats')}>
              Feats
            </Button>
            <Button style={styles.charBtn} type='primary' onPress={() => this.setDrawer('equipment')}>
              Equipment
            </Button>
          </WingBlank>

        </List>
        </BaseStatsDrawer>
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


