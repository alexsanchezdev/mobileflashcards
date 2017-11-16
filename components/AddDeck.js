import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, View } from 'react-native'
import { getDecks, saveDeckTitle } from '../utils/store'

class AddDeck extends Component {

    state = {
        deckTitle: ''
    }

    handleSubmit = () => {
        const { deckTitle } = this.state
        saveDeckTitle(deckTitle)
        this.setState({
            deckTitle: ''
        })
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
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
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