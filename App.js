import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import AppBar from './components/AppBar';




import AppNavigator from "./navigation/AppNavigation";




export default function App() {
  return (
    
    <PaperProvider style={styles.container}>
        <AppNavigator/> 
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },

});
