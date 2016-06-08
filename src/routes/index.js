import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SceneA from '../components/SceneA';
import SceneB from '../components/SceneB';

export function getSceneA() {
  return {
    getTitle() {
      return 'Scene A';
    },
    getSceneClass() {
      return SceneA;
    },
  };
}

export function getSceneB() {
  return {
    getTitle() {
      return 'Scene B';
    },
    getSceneClass() {
      return SceneB;
    },
  };
}

function getViewNotFoundRoute(route) {
  return {
    getTitle() {
      return 'View not found';
    },
    renderScene() {
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        },
        header: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
      });

      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            View not found: {JSON.stringify(route)}
          </Text>
        </View>
      );
    },
  };
}

export function mapRoute(props, route) {
  switch (route.type || '') {
    case 'sceneA':
      return getSceneA();
    case 'sceneB':
      return getSceneB();
    default:
      return getViewNotFoundRoute(route);
  }
}
