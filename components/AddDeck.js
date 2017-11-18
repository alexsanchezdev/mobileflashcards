import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, View } from 'react-native'
import { saveDeckTitle } from '../utils/store'
import { addDeck} from '../actions'
import { connect } from 'react-redux'

class AddDeck extends Component {

    state = {
        deckTitle: ''
    }

    handleSubmit = () => {
        const { deckTitle } = this.state

        if(deckTitle !== '') {
            saveDeckTitle(deckTitle).then(() => {
                this.props.dispatch(addDeck(deckTitle))
            })
        }
        this.setState({
            deckTitle: ''
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container} onTouchStart={Keyboard.dismiss}>
                <View><Text style={styles.header}>What's the title of your new deck?</Text></View>
                <TextInput 
                    placeholder={`Deck's title`} 
                    style={styles.deckInput} 
                    maxLength={25}
                    onChangeText={(deckTitle) => this.setState({ deckTitle })} 
                    value={this.state.deckTitle}
                    selectionColor={'#E91E63'}/>
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                    <Text style={{fontSize: 16, textAlign: 'center', color: '#E91E63', fontWeight: 'bold'}}>SUBMIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    deckInput: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#E91E63',
        borderRadius: 4,
        padding: 8,
    },
    submitBtn: {
        marginTop: 20,
        marginBottom: 40,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    header: {
        fontSize: 28,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center'
    }
})

export default connect()(AddDeck)