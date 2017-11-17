import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddDeck from './components/AddDeck'
import DesksList from './components/DesksList'
import DeckDetails from './components/DeckDetails'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Tabs = TabNavigator({
  Decks: {
    screen: DesksList,
    navigationOptions: {
      title: 'My decks',
      headerStyle: {
        height: Platform.OS === 'ios' && 28,
        paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
        backgroundColor: '#E91E63',
      },
      headerTintColor: '#fff',
      tabBarLabel: 'My decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-list' size={26} color={tintColor} />
    }
  },
  Add: {
    screen: AddDeck,
    navigationOptions: {
      title: 'New deck',
      headerStyle: {
        height: Platform.OS === 'ios' && 28,
        paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
        backgroundColor: '#E91E63',
      },
      headerTintColor: '#fff',
      tabBarLabel: 'New deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-add' size={26} color={tintColor} />
    }
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerBackTitle: null,
    },
  },
  DeckDetails: {
    screen: DeckDetails,
    path: '/:title',
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}'s deck`,
      headerStyle: {
        height: Platform.OS === 'ios' && 28,
        paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
        backgroundColor: '#E91E63',
      },
      headerTintColor: '#fff',
    }),
  }
})

const FlashStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <FlashStatusBar backgroundColor="#E91E63" barStyle='light-content'/>
        <MainNavigator />
      </View>
      </Provider>
    );
  }
}
