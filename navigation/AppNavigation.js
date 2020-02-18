import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AllItemsScreen from '../screens/AllItems';
import UserItemsScreen from '../screens/UserItems';
import LoginScreen from '../screens/Login';
import ItemScreen from '../screens/Item';

import FloatButton from '../components/FAB';

import MyAppBar from '../components/AppBar';
import Modal from '../components/Modal';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllItems" component={AllItemsScreen} />
      <Stack.Screen name="UserItems" component={UserItemsScreen} />
      <Stack.Screen name="ToItem" component={ItemScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}



export default function AppNavigator() {

  const [isAddMode, setIsAddMode] = useState(false);


  return ( 
    <NavigationContainer>

      <Modal 
      visible={isAddMode}
      hideModal = {() => setIsAddMode(false)}
      />

      <FloatButton
      showModal= {() => setIsAddMode(true)}
      />
      <MyAppBar 
      onAllItems={() => console.log('Pressed A')}
      onUserItems={() => console.log('Pressed B')}
      onLogin={() => console.log('Pressed C')}
      />
      <MyStack />
  </NavigationContainer>
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
