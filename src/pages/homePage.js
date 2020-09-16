import React, { Component } from 'react';
import CharacterList from './characterList';
import CharacterCreator from './characterCreator';
import { View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Button } from '@ant-design/react-native';

const Stack = createStackNavigator();

const HomePage = props =>{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => (
            <Image style={styles.imgResize} source={require('../../assets/transparentLogo.png')}/>
          )
        }}>
        <Stack.Screen name="Character List">
          { rest => <CharacterList logout={props.logout} {...rest}/>}
        </Stack.Screen>
        <Stack.Screen name="Character Creator" component={CharacterCreator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomePage;

const styles = StyleSheet.create({
  headerBtn: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 4,
    marginRight: 4
  },
  imgResize: {
    width: 50,
    height: 45
  },
})
