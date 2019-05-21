import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <Text style={[styles.techHeaderText]}> Technologies: </Text>
        <Text style={[styles.techText]}> React </Text>
        <Text style={[styles.techText]}> Angular </Text>
        <Text style={[styles.techText]}> Ionic </Text>
        <Text style={[styles.techText]}> Vue </Text>
        <Text style={[styles.techText]}> Cordova </Text>
        <Text style={[styles.techText]}> TypeScript </Text>
        <Text style={[styles.techText]}> Node </Text>
        <Text style={[styles.techText]}> Express </Text>
        <Text style={[styles.techText]}> Mongo </Text>
        <Text style={[styles.techText]}> Android </Text>
        <Text style={[styles.techText]}> Kotlin </Text>
        <Text style={[styles.techText]}> Java </Text>
        <Text style={[styles.techText]}> Python </Text>
        <Text style={[styles.techText]}> JavaScript </Text>
        <Text style={[styles.techText]}> HTML </Text>
        <Text style={[styles.techText]}> CSS </Text>
        <Text style={[styles.techText]}> SASS </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  techText: {
    fontSize: 30,
    padding: 10
  },
  techHeaderText: {
    paddingTop: 20,
    fontSize: 50
  }
});
