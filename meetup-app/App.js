import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Navigator, Route } from './Navigator';

const Screen1 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: '#59C9A5' }]}>
    <Text style={styles.textContainer}>This is Screen1</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Move to Screen 2"
        onPress={() => navigator.push('Screen2')}
      />
    </View>
  </View>
);

const Screen2 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: '#23395B' }]}>
    <Text style={styles.textContainer}>This is Screen2</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Move to Screen 3"
        onPress={() => navigator.push('Screen3')}
      />
    </View>
    <Button
      title="Back"
      onPress={() => navigator.pop()}
    />
  </View>
);

const Screen3 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: '#B9E3C6' }]}>
    <Text style={styles.textContainer}>This is Screen3</Text>
    <Button
      title="Back"
      onPress={() => navigator.pop()}
    />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <Navigator>
        <Route name="Screen1" component={Screen1} />
        <Route name="Screen2" component={Screen2} />
        <Route name="Screen3" component={Screen3} />
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  textContainer: {
    fontSize: 30
  }
});