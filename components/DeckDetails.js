import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native'

class DeckDetails extends Component {

    componentDidMount() {

    }

    render() {
        const { navigation } = this.props
        const { title, questions } = navigation.state.params
        return (
            <View style={{flex: 1, padding: 40}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontSize: 32, textAlign: 'center'}}>{title}</Text>
                    <Text style={{paddingTop: 8, fontSize: 18, textAlign: 'center'}}>{questions.length} cards</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.addCard}>
                        <Text style={{fontSize: 16, textAlign: 'center', color: '#E91E63', fontWeight: 'bold'}}>ADD CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startQuiz}>
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

export default DeckDetails