import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getDecks } from '../utils/store'

class DesksList extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        getDecks().then( result => {
            const data = Object.keys(result).map( deck => result[deck])
            this.setState({ data })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data} 
                    renderItem={({item}) => <ListView {...item}/>}  
                    keyExtractor={item => item.title}/>
            </View>    
        )
    }
}

const ListView = ({title, questions}) => (
    <View style={styles.listView}>
        <Text>{title}</Text>
        <Text>{questions.length} questions</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row', 
        flex: 1
    },
    listView: {
        paddingTop: 40, 
        paddingBottom: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default DesksList