import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getDecks } from '../utils/store'

class DesksList extends Component {

    state = {
        data: undefined
    }

    componentDidMount() {
        getDecks().then( result => {
            const data = Object.keys(result).map( deck => result[deck])
            this.setState({ data })
        }).catch(err => console.log(err))
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
        const { data } = this.state
        return (
            <View style={styles.container}>
                { data 
                ? <FlatList
                    data={data} 
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

export default DesksList