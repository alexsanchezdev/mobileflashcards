import React from 'react'
import { Platform } from 'react-native'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddDeck from '../components/AddDeck'
import DecksList from '../components/DecksList'
import DeckDetails from '../components/DeckDetails'
import AddCard from '../components/AddCard'
import DeckQuiz from '../components/DeckQuiz'
import { Ionicons } from '@expo/vector-icons'

export const Tabs = TabNavigator({
    Decks: {
      screen: DecksList,
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

export const DetailsStack = StackNavigator({
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: ({navigation}) => ({
          title: `${navigation.state.params.title}'s deck`,
          headerStyle: {
            height: Platform.OS === 'ios' && 28,
            paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
            backgroundColor: '#E91E63',
          },
          headerTintColor: '#fff',
        }),
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
          title: `Add card`,
          headerStyle: {
            height: Platform.OS === 'ios' && 28,
            paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
            backgroundColor: '#E91E63',
          },
          headerTintColor: '#fff',
        },
    },
    DeckQuiz: {
      screen: DeckQuiz,
      navigationOptions: ({navigation}) => ({
        title: `Quiz`,
        headerStyle: {
          height: Platform.OS === 'ios' && 28,
          paddingTop: Platform.OS === 'ios' && -Constants.statusBarHeight,
          backgroundColor: '#E91E63',
        },
        headerTintColor: '#fff',
      }),
    }
}, { headerMode: 'none'})
export const MainNavigator = StackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: {
        headerBackTitle: null,
      },
    },
    DeckDetails: {
      screen: DetailsStack,
    }
  }, {
      headerMode: 'float'
  })