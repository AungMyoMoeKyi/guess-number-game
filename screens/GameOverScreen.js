import React from "react";
import {View,Text,StyleSheet, Button} from "react-native";

const GameOverScreen = (props) =>{
    return(
        <View>
            <Text>The Game is over</Text>
            <Text>Number of rounds:{props.roundNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default GameOverScreen;