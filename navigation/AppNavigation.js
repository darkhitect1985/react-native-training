import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from 'react-native-vector-icons';



import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';



import AllItemsScreen from '../screens/AllItems';
import FavouritesScreen from '../screens/Favourites';
import LoginScreen from '../screens/Login';
import ItemScreen from '../screens/Item';

import FloatButton from '../components/FAB';

// import MyAppBar from '../components/AppBar';


import Modal from '../components/Modal';





const Stack = createStackNavigator();

function ProductStack(props) {
  return (
    <Stack.Navigator screenOptions={{
      headerRight: ({ color, size }) => (
        <MaterialCommunityIcons name="menu" color={'grey'} size={22} 
        onPress={() => props.navigation.toggleDrawer()}/>
      ),
      headerRightContainerStyle: {
        marginRight: 20,
      }
    }}>
      <Stack.Screen name="AllItems" component={AllItemsScreen}/>
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="ToItem" component={ItemScreen} 
     options={{
      headerRight: ({ color, size }) => (
        <MaterialCommunityIcons name="star-outline" color={'grey'} size={22}/>
      ),
      headerRightContainerStyle: {
          marginRight: 20,
      }
    }}
    />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}



const FavStack = createStackNavigator();

function FavouritesStack(props) {
  return (
    <FavStack.Navigator screenOptions={{
      headerRight: ({ color, size }) => (
        <MaterialCommunityIcons name="menu" color={'grey'} size={22} 
        onPress={() => props.navigation.toggleDrawer()}/>
      ),
      headerRightContainerStyle: {
        marginRight: 20,
      }
    }}>
      <FavStack.Screen name="Favourites" component={FavouritesScreen} />
      <FavStack.Screen name="ToItem" component={ItemScreen} 
     options={{
      headerRight: ({ color, size }) => (
        <MaterialCommunityIcons name="star-outline" color={'grey'} size={22}/>
      ),
    }}
    />
      <FavStack.Screen name="Login" component={LoginScreen} />
    </FavStack.Navigator>
  );
}






const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ activeBackgroundColor: '#8BCDF1', }}  >
      <Tab.Screen name="Products" component={ProductStack} 
           options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} focused={true}/>
            ),
          }}
          />
      <Tab.Screen name="Favourites" component={FavouritesStack} 
     options={{
      tabBarLabel: 'Favourites',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="star" color={color} size={size} />
      ),
    }}
    />
    </Tab.Navigator>
  );
}





const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyTabs" component={MyTabs} options= {{
        drawerIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} focused={true}/>
        )
      }}/>
      <Drawer.Screen name="MyProducts" component={ProductStack} ž
      options= {{
        drawerIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons name="star" color={color} size={size} focused={true}/>
        )
      }}/>
      <Drawer.Screen name="Login" component={LoginScreen} 
      options= {{
        drawerIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons name="login" color={color} size={size} focused={true}/>
        )
      }}/>
    </Drawer.Navigator>
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
      <MyDrawer />


      {/* <MyAppBar 
      onAllItems={() => console.log('Pressed A')}
      onUserItems={() => console.log('Pressed B')}
      onLogin={() => console.log('Pressed C')}
      /> */}



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
