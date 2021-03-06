import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    // const numberInputHandler = (inputText) => {
    //     setEnteredValue(inputText.replace(/[^0-9]g/), "");
    // };

    const resetInputHandler = (props) => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmedInputHandler = (props) => {
        const chooseNumber = parseInt(enteredValue);
        if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) {
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chooseNumber);
        setEnteredValue("");
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Text>Chosen Number : {selectedNumber}</Text>;
    }

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredValue);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99. ",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chooseNumber);
        setEnteredValue("");
    };

    // implement at StartGameScreen.js
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton title="START GAME" onPress={() => props.onStartGame(selectedNumber)}>Start Game</MainButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor='red'
                        onChangeText={(inputText) => { setEnteredValue(inputText.replace(/[^0-9]g/), ""); }}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accents} />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily:'open-sans-bold',
    },

    button: {
        width: 100,
    },

    input: {
        width: 50,
        textAlign: "center",
    },

    // align center
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    // dismiss the keyboard when confirm complete

});

export default StartGameScreen;