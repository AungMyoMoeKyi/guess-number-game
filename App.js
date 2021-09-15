import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [roundNumber, setRoundNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setRoundNumber(0);
    setUserNumber(null);
  };

  const startGameHandler = (selecedNumber) => {
    setUserNumber(selecedNumber);
  };

  const gameOverHandler = (rounds) => {
    setRoundNumber(rounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && roundNumber <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (roundNumber > 0) {
    content = (<GameOverScreen
      roundNumber={roundNumber}
      userNumber={userNumber}
      onRestart={configureNewGameHandler}
    />);
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
