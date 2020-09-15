import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, ThemeProvider } from 'react-native-elements';

import CharacterList from './src/pages/characterList';
import Landing from './src/pages/landing';

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
