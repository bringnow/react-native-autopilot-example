import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { openSceneB } from '../actions';

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
  button: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export class SceneA extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Scene A
        </Text>
        <TouchableOpacity onPress={this.props.openSceneB}>
          <View>
            <Text style={styles.button}>Go to scene B</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  openSceneB: () => {
    dispatch(openSceneB());
  },
});

SceneA.propTypes = {
  openSceneB: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SceneA);
