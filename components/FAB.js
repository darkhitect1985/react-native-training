import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FloatButton = (props) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={props.showModal}
  />
);

const styles = StyleSheet.create({
  fab: {
    elevation: 3,
    zIndex: 5,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FloatButton;