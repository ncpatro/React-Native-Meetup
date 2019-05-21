import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#0000FF',
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  rsvp: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
    marginTop: 130,
    fontSize: 30
  }
});

class MultiTouch extends React.Component {
  static defaultProps = {
    onPress: () => null,
    numberOfTouches: 2,
  };

  onStartShouldSetResponder = (evt) => {
    if (evt.nativeEvent.touches.length === this.props.numberOfTouches) {
      return true;
    }

    return false;
  };

  onResponderRelease = () => {
    this.props.onPress();
  };

  render() {
    return (
      <View
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onResponderRelease={this.onResponderRelease}
      >
        {this.props.children}
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MultiTouch onPress={() => Alert.alert('Multiple touches detected!')}>
          <TouchableOpacity onPress={() => Alert.alert('RSVP Done!')}>
            <View style={styles.box}>
              <Text style={styles.rsvp} >RSVP Here!</Text>
            </View>
          </TouchableOpacity>
        </MultiTouch>
      </View>
    );
  }
}