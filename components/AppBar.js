import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class AppBar extends React.Component {
  render() {
    return (
      <Appbar.Header style={styles.bottom}>
        <Appbar.Action icon="archive" onPress={this.props.onAllItems} color='#f1c40f' />
        <Appbar.Action icon="email" onPress={this.props.onUserItems} 
        accessibilityLabel='try'/>
        <Appbar.Action icon="star-outline" onPress={this.props.onLogin} />
        <Appbar.Action icon="star" onPress={() =>console.log('Pressed archive')} />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    justifyContent:'space-evenly',
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    height:50,
  },
});