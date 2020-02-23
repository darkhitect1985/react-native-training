import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';


import { PRODUCTS } from '../data/dummy-data';

import ProductItem from '../components/ProductItem';


const UserItemsScreen = props => {

  const prodId = props.route.params.productId;


   const selectedProduct = PRODUCTS.find(product => product.id === prodId);



    console.log(selectedProduct);
  return(
    <View style={styles.screen}>
      <Text>{selectedProduct.title}</Text>
      <Text>{selectedProduct.description}</Text>
      <Text>{selectedProduct.color}</Text>
      <Text>{selectedProduct.size}</Text>
      <Text>{selectedProduct.price}</Text>
      <Button title="this is item screen" onPress={() => {
          props.navigation.navigate('AllItems');
      }} />

      <Image
          style={{width: 200, height: 200, marginVertical: 50}}
          source={selectedProduct.imageUrl}/>


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
