import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { Drawer, Button, List, Stepper } from '@ant-design/react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';


export default class AbilityScoresComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  toggleDrawer = () => {
    this.setState({ visible: !this.state.visible});
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.drawerTitle}>Ability Scores</Text>
        <Button type='primary'>Save</Button>
        <ScrollView>
        <List>
          <AbilityItem ability='Strength'/>
          <AbilityItem ability='Dexterity'/>
          <AbilityItem ability='Constitution'/>
          <AbilityItem ability='Intelligence'/>
          <AbilityItem ability='Wisdom'/>
          <AbilityItem ability='Charisma'/>



        </List>
        </ScrollView>




      </View>
    );
  }
}
const AbilityItem = props => {

  return (
    <List.Item>
      <View  style={styles.modifierViewLeft}>
        <View>
          <ImageBackground style={styles.scroll} source={require('../../assets/scroll.png')} >
            <Text style={styles.modifierNum}>0</Text>
          </ImageBackground>
          <Text style={styles.modifierTxt}>{props.ability} Modifier</Text>

        </View>
        <View style={styles.modifierViewRight}>
          <View style={{justifyContent: 'center'}}>
            <Stepper showNumber max={10} min={1} value={props.value} style={{width: '100%'}}/>

            <Text>{props.ability} score</Text>
          </View>

        </View>
      </View>
    </List.Item>

  );
}

const styles = StyleSheet.create({
  modifierViewLeft: {
    flexDirection: 'row',
  },
  modifierNum: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{rotate: '270deg'}],
  },
  modifierViewRight: {
    flexDirection: 'row',
    marginLeft: '30%'
  },
  modifierTxt: {
  },
  scroll:{
    width: 110,
    height: 120,
    transform: [{ rotate: '90deg'}],
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: '#000000',
    height: '100%',
    width: '130%'
  },
  drawerTitle: {
    fontSize: 30,
    color: '#f0ae45',
    textAlign: 'center'
  }
})
