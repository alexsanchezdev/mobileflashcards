import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import { addCardToDeck } from '../utils/store'

class AddCard extends Component {
    
    state = {
        questionBorderColor: '#d2d2d2',
        answerBorderColor: '#d2d2d2'
    }
    
    render() {
        return (
            <View style={{flex: 1, padding: 40}} onTouchStart={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
                <TextInput placeholder='Question' 
                multiline={true}
                onFocus={() => this.setState({ questionBorderColor: '#E91E63'})}
                onBlur={() => this.setState({ questionBorderColor: '#d2d2d2'})}
                style={[styles.input, {borderColor: `${this.state.questionBorderColor}`}]} 
                selectionColor={'#E91E63'}/>
                <TextInput placeholder='Answer' 
                multiline={true} 
                onFocus={() => this.setState({ answerBorderColor: '#E91E63'})}
                onBlur={() => this.setState({ answerBorderColor: '#d2d2d2'})}
                style={[styles.input, {borderColor: `${this.state.answerBorderColor}`, marginTop: 20}]} 
                selectionColor={'#E91E63'}/>
            </KeyboardAvoidingView>
                <TouchableOpacity style={styles.submitBtn} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>SAVE CARD</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        padding: 8,
    },
    submitBtn: {
        padding: 16,
        backgroundColor: '#E91E63',
        borderRadius: 8
    },
})

export default AddCard