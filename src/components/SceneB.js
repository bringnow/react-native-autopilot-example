import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export class SceneB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Scene B
        </Text>
        <Text style={styles.text}>Nothing to see here. Please go back!</Text>
      </View>
    );
  }
}

export default SceneB;
