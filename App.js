import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import { createStore, combineReducers } from 'redux';
//Provider is used to "provide"  redux to all components within wraped main component
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';



import AppNavigator from "./navigation/AppNavigation";

//in case of mutliple reducers we can combine them like this
const rootReducer = combineReducers({
  products: productsReducer
});

//use combined reducers to create store
const store = createStore(rootReducer);


export default function App() {
  return (
    
    <Provider store={store}>
      <PaperProvider style={styles.container}>
          <AppNavigator/> 
      </PaperProvider>
    </Provider>

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
