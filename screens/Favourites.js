// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';


// export default function Login() {
//   return (
//       <View style={styles.item}>
//         <Text>Login!</Text>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//       marginTop:80,
//   },
// });

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const UserItemsScreen = props => {
  // console.log(props);
  return(
    <View style={styles.screen}>
      <Text>Favourites</Text>
      <Button title="Go Back somewhere" onPress={() => {
          props.navigation.navigate('AllItems');
      }} />
    </View>
  
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default UserItemsScreen;
