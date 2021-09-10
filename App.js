import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selecedNumber) => {
    setUserNumber(selecedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"></Header>
      {content}
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
