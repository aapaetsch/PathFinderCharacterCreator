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
          <Stack.Navigator>
            <Stack.Screen
              name="Character List"
              component={CharacterList}
              options={{
                headerLeft: () => (
                  <Button
                    style={styles.headerBtn}
                    onPress={props.logout}
                    title='Logout'
                    />
                ),
                headerRight: () => (
                  <Button
                    style={styles.headerBtn}
                    onPress={() => navigate.navigate('Character Creator')}
                    title={`Add New`}
                    />
                ),
                headerTitle: () => (
                  <Image style={styles.imgResize} source={require('../../assets/transparentLogo.png')}/>
                )
              }}
            />
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
