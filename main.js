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
    this.sound = null;
    this.state = {
      soundPosition: null,
      soundDuration: null,
      isPlaying: false,
      isLoading: true,
    };
  }

  playSong = async (event)=> {
    console.log(this.state.soundDuration);
    if (this.state.isPlaying) {
      this.sound.pause();
    } else {
      this.sound.play();
    }
  }

  loadSound = async ()=> {
    if (this.sound === null) {
      this.sound = await new Audio.Sound({
        source: require('./assets/sounds/aids.mp3'),
      });
      await this.sound.loadAsync();
      this.sound.setStatusChangeCallback(this.updateSoundStatus);
      this.setState({ soundDuration: this.sound.getDurationMillis() });
    }
  }

  updateSoundStatus = (status)=> {
     this.setState({ soundPosition: status.position_millis, isPlaying: status.is_playing });
  }

  componentDidMount() {
    Audio.setIsEnabled(true);
    this.loadSound();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Click below to get AIDS!</Text>
        <Button title={'Get AIDS!'} onPress={this.playSong} />
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
