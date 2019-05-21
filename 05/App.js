import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'React'},
            {key: 'Angular'},
            {key: 'HTML'},
            {key: 'CSS'},
            {key: 'JavaScript'},
            {key: 'Ionic'},
            {key: 'Cordova'},
            {key: 'JQuery'},
            {key: 'Node'},
            {key: 'Express'},
            {key: 'Mongo'},
            {key: 'Python'},
            {key: 'Android'},
            {key: 'Vue'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 30,
  },
})
