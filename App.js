import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'
import AddDeck from './components/AddDeck'
import DesksList from './components/DesksList'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Tabs = TabNavigator({
  Decks: {
    screen: DesksList,
    navigationOptions: {
      tabBarLabel: 'My decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-list' size={26} color={tintColor} />
    }
  },
  Add: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={26} color={tintColor} />
    }
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const FlashStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <FlashStatusBar backgroundColor="#E91E63" barStyle='light-content'/>
        <Tabs />
      </View>
      </Provider>
    );
  }
}
