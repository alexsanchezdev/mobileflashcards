import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/AddDeck'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
