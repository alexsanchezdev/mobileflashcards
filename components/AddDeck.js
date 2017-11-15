import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, View, AsyncStorage } from 'react-native'
const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

class AddDeck extends Component {

    state = {
        deckTitle: ''
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container} onTouchStart={Keyboard.dismiss}>
                <View><Text style={styles.header}>What's the title of the new deck?</Text></View>
                <TextInput 
                    placeholder={`Deck's title`} 
                    style={styles.deckInput} 
                    maxLength={25}
                    onChangeText={(deckTitle) => this.setState({ deckTitle })} 
                    value={this.state.deckTitle}/>
                <TouchableOpacity style={styles.submitBtn} onPress={() => addDeck(this.state.deckTitle)}>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitBtn} onPress={() => getDecks()}>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Request</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

async function addDeck(deckTitle) {
    try {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
            [deckTitle]: {
                title: deckTitle,
                questions: []
            }
        }));
    } catch (error) {
        console.log(error)
    }
}

async function getDecks() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        if (value !== null){
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        console.log(error)
      }
}

const styles = StyleSheet.create({
    deckInput: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 24,
    },
    submitBtn: {
        marginTop: 40,
    },
    header: {
        fontSize: 36,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center'
    }
})

export default AddDeck