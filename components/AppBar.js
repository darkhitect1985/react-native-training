import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class AppBar extends React.Component {
  render() {
    return (
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="archive" onPress={this.props.onAllItems} />
        <Appbar.Action icon="email" onPress={this.props.onUserItems} />
        <Appbar.Action icon="label" onPress={this.props.onLogin} />
        <Appbar.Action icon="delete" onPress={() =>console.log('Pressed archive')} />
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'realtive',
    left: 0,
    right: 0,
    top: 0,
    paddingTop:25,
    height:80,
  },
});