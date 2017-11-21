import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, View, Alert } from 'react-native'
import { saveDeckTitle } from '../utils/store'
import { addDeck} from '../actions'
import { connect } from 'react-redux'

class AddDeck extends Component {

    state = {
        deckTitle: '',
        borderColor: '#d2d2d2'
    }

    handleSubmit = () => {
        const { deckTitle } = this.state

        if(deckTitle !== '') {
            saveDeckTitle(deckTitle).then(() => {
                this.props.dispatch(addDeck(deckTitle))
                this.setState({
                    deckTitle: ''
                })
                this.props.navigation.navigate('DeckDetails', {title: deckTitle})
            })
        } else {
            Alert.alert('Error', 'All fields are required.')
        }
    }

    render() {
        return (
            <View style={{flex: 1, padding: 40}} onTouchStart={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' style={{flex: 1, justifyContent: 'center'}}>
                    <View><Text style={styles.header}>What's the title of your new deck?</Text></View>
                    <TextInput 
                    placeholder={`Deck's title`} 
                    style={[styles.deckInput,{borderColor: `${this.state.borderColor}`}]} 
                    maxLength={25}
                    onFocus={() => this.setState({ borderColor: '#E91E63'})}
                    onBlur={() => this.setState({ borderColor: '#d2d2d2'})}
                    onChangeText={(deckTitle) => this.setState({ deckTitle })} 
                    value={this.state.deckTitle}
                    selectionColor={'#E91E63'}
                    autoCorrect={false}/>
                </KeyboardAvoidingView>
                <View>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                        <Text style={{fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>SAVE DECK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckInput: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    submitBtn: {
        padding: 16,
        backgroundColor: '#E91E63',
        borderRadius: 8
    },
    header: {
        fontSize: 28,
        textAlign: 'center',
    },
})

export default connect()(AddDeck)