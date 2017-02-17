import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class App extends React.Component {
  playSong = (event)=> {
    console.log("Play Song");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button onPress={this.playSong}>Play Me</Button>
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

Exponent.registerRootComponent(App);
