import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"></Header>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
