import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/store'
import { retrieveDecks } from '../actions'
import DeckDetails from './DeckDetails'

class DecksList extends Component {

    componentDidMount() {
        getDecks().then((result) => {
            this.props.dispatch(retrieveDecks(result))
        })
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE"
            }}
          />
        )
    }

    render() {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                { decks 
                ? <FlatList
                    data={decks} 
                    renderItem={({item}) => <ListView navigation={this.props.navigation} {...item}/>}  
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={this.renderSeparator}/>
                : <Text style={{flex: 1, alignSelf: 'center', textAlign: 'center'}}>You don't have any decks yet.</Text>
                }
                
            </View>    
        )
    }
}

const ListView = ({title, questions, navigation}) => (
    <TouchableOpacity style={styles.listView} onPress={() => navigation.navigate('DeckDetails', {title: title})}>
        <Text style={{fontSize: 24}}>{title}</Text>
        <Text style={{paddingTop: 8, color: 'gray'}}>{questions.length} cards</Text>
    </TouchableOpacity>
)
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        flex: 1
    },
    listView: {
        paddingTop: 40, 
        paddingBottom: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    }
})

const mapStateToProps = (state, props) => {

    if (state) {
        const data = Object.keys(state).map( deck => state[deck])
        return {
            decks: data
        }
    }

    return {
    }
}

export default connect(mapStateToProps)(DecksList)