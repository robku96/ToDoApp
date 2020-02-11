import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#3C69FF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#3C69FF',
    marginBottom: 5,
  },
});
