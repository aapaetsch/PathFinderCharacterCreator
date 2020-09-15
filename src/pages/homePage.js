import React, { Component } from 'react';
import CharacterList from './characterList';
import CharacterCreator from './characterCreator';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@ant-design/react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = props =>{
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Character List"
              component={CharacterList}
              options={{
                headerLeft: () => (
                  <Button 
                    type="ghost"
                    style={styles.headerBtn}
                    onPress={props.logout}
                    >
                    Logout
                  </Button>
                ),
                headerRight: () => (
                  <Button
                    type='ghost'
                    style={styles.headerBtn}
                    onPress={() => alert('You clicked this bitch')}
                    >
                    Add New
                  </Button>
                )
              }}
            />
            <Stack.Screen name="Character Creator" component={CharacterCreator}/>
          </Stack.Navigator>
          {/* <Tab.Navigator>
            <Tab.Screen name="Character List" component={CharacterList}/>
            <Tab.Screen name="Character Creator" component={CharacterCreator}/>
          </Tab.Navigator> */}
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
  }
})
