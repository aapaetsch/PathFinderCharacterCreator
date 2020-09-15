import React, { Component } from 'react';
import CharacterList from './characterList';
import CharacterCreator from './characterCreator';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomePage = props =>{
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Character List"
              component={CharacterList}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomePage;