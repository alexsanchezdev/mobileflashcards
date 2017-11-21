import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends Component {

    startQuiz(title) {
        const { decks } = this.props

        if (decks[title].questions.length > 0) {
            this.props.navigation.navigate('DeckQuiz', {title: title, questions: decks[title].questions})
        } else {
            Alert.alert('Error', 'There are no questions in this deck. Please, add some question before taking the quiz.')
        }
    }

    render() {
        const { navigation, decks } = this.props
        const { title } = navigation.state.params
        return (
            <View style={{flex: 1, padding: 40}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontSize: 32, textAlign: 'center'}}>{title}</Text>
                    <Text style={{paddingTop: 8, fontSize: 18, textAlign: 'center', color: 'gray'}}>{decks[title].questions.length} cards</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addCard} onPress={() => navigation.navigate('AddCard', {title: title})}>
                        <Text style={{fontSize: 16, textAlign: 'center', color: '#E91E63', fontWeight: 'bold'}}>ADD CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startQuiz} onPress={() => this.startQuiz(title)}>
                        <Text style={{fontSize: 16, textAlign: 'center', color: '#FFF', fontWeight: 'bold'}}>START QUIZ</Text>
                    </TouchableOpacity>
                </View>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addCard: {
        marginTop: 80,
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    startQuiz: {
        padding: 16,
        backgroundColor: '#E91E63',
        borderRadius: 8
    }

})

const mapStateToProps = (state, props) => {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckDetails)