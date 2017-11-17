import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/store'
import { retrieveDecks } from '../actions'

class DesksList extends Component {

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
                    renderItem={({item}) => <ListView {...item}/>}  
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={this.renderSeparator}/>
                : <Text style={{flex: 1, alignSelf: 'center', textAlign: 'center'}}>You don't have any deck yet.</Text>
                }
                
            </View>    
        )
    }
}

const ListView = ({title, questions}) => (
    <View style={styles.listView}>
        <Text style={{fontSize: 24}}>{title}</Text>
        <Text style={{paddingTop: 8}}>{questions.length} questions</Text>
    </View>
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

    console.log(state)
    if (state) {
        const data = Object.keys(state).map( deck => state[deck])
        return {
            decks: data
        }
    }

    return {
    }
}

export default connect(mapStateToProps)(DesksList)