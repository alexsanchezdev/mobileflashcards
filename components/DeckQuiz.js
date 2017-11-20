import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class DeckQuiz extends Component {

    state = {
        data: undefined,
        activeScreen: 0
    }

    handleNextQuestion(questionNumber, result) {
        const { data, activeScreen } = this.state

        if (data.length > activeScreen) {
            data[questionNumber] = result
            this.setState({
                data,
                activeScreen: this.state.activeScreen + 1,
            })
        }   
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params
        const array = questions.map(() => undefined)
        this.setState({
            data: array
        })
    }

    render() {
        console.log(this.state)
        const { activeScreen } = this.state
        const { questions } = this.props.navigation.state.params

        return (
            <View>
                <Text>
                {questions.length > activeScreen 
                ? questions[activeScreen].question 
                : 'Finished quiz'}
                </Text>
                <TouchableOpacity onPress={() => this.handleNextQuestion(activeScreen, true)}>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        )

        // Mostrar pregunta
        // Mostrat boton 'SHOW ANSWER'
        // Ocultar pregunta
        // Mostrar respuesta
        // Ocultar boton 'SHOW_ANSWER'
        // Mostrar botones 'CORRECT' e 'INCORRECT'

    }

}


export default DeckQuiz