import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MainNavigator } from './navigation'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


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
