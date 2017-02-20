import Exponent, {
  Asset,
  Audio,
} from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  playSong = async (event)=> {
    console.log("Play Song");
    const sound = new Audio.Sound({
      source: require('./assets/sounds/test.mp3'),
    });
    await sound.loadAsync();
    console.log(sound.isLoaded());
    sound.play();
  }

  async getLoadedSound() {
    if (this.sound == null) {
      await Asset.fromModule('./assets/sounds/test.mp3').downloadAsync();
    }
    return await this.sound.loadAsync();
  }

  componentDidMount() {
    Audio.setIsEnabled(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button title={'Play Me'} onPress={this.playSong} />
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
