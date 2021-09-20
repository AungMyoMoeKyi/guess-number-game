import React from "react";
import {View,Text,StyleSheet, Button,Image} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) =>{
    return(
        <View style={styles.screen}>
      <TitleText>The Game over screen</TitleText>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require("../assets/success.png")}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone need{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: "black",
      overflow: "hidden",
      marginVertical: 30,
    },
  
    image: {
      width: "100%",
      height: "100%",
    },
  
    highlight: {
      color: Colors.primary,
      fontFamily: "open-sans-bold",
    },
  
    resultText: {
      textAlign: "center",
      fontSize: 20,
    },
  
    resultContainer: {
      marginHorizontal: 30,
      marginVertical: 15,
    },
  });

export default GameOverScreen;