import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Keyboard, Alert } from 'react-native'
import { addCardToDeck } from '../utils/store'
import { saveCard } from '../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class AddCard extends Component {
    
    state = {
        questionBorderColor: '#d2d2d2',
        answerBorderColor: '#d2d2d2',
        question: '',
        answer: ''
    }

    handleSubmit = () => {
        const { question, answer } = this.state
        const { title } = this.props.navigation.state.params

        if(question !== '' && answer !== '') {
            addCardToDeck(title, { question, answer }).then(() => {
                this.props.dispatch(saveCard(title, {question, answer}))
                this.setState({
                    question: '',
                    answer: ''
                })
                this.props.navigation.dispatch(NavigationActions.back())
            })
        } else {
            Alert.alert('Error', 'All fields are required.')
        }
        

        
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
                selectionColor={'#E91E63'}
                onChangeText={(question) => this.setState({ question })}
                value={this.state.question} />
                <TextInput placeholder='Answer' 
                multiline={true} 
                onFocus={() => this.setState({ answerBorderColor: '#E91E63'})}
                onBlur={() => this.setState({ answerBorderColor: '#d2d2d2'})}
                style={[styles.input, {borderColor: `${this.state.answerBorderColor}`, marginTop: 20}]} 
                selectionColor={'#E91E63'}
                onChangeText={(answer) => this.setState({ answer })} 
                value={this.state.answer}/>
            </KeyboardAvoidingView>
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
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

export default connect()(AddCard)