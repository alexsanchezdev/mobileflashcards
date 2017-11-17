import React, { Component } from 'react'
import { Text } from 'react-native'

class DeckDetails extends Component {

    render() {
        const { navigation } = this.props
        return (
            <Text>{navigation.state.params.title}</Text>
        )
    }
}

export default DeckDetails