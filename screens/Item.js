import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import { PRODUCTS } from '../data/dummy-data';

import ProductItem from '../components/ProductItem';

//import action
import { toggleFavorite } from '../store/actions/products';


const UserItemsScreen = props => {
  console.log(props);

  const prodId = props.route.params.productId;


   const selectedProduct = PRODUCTS.find(product => product.id === prodId);



    // const availableProducts = useSelector(state => state.products.products);
    //   const favouriteProducts = useSelector(state => state.products.favouriteProducts);

 

   const currentProductIsFavorite = useSelector(state =>
     state.products.favouriteProducts.some(product => product.id === prodId)
   );


   const dispatch = useDispatch();
   const toggleFavoriteHandler = useCallback(() => {
  
     dispatch(toggleFavorite(prodId));
   }, [dispatch, prodId]);


   const fav = useSelector(state => state.products);


   console.log(fav);




    // console.log(selectedProduct);
  return(
    <View style={styles.screen}>
      <Text>{selectedProduct.title}</Text>
      <Text>{selectedProduct.description}</Text>
      <Text>{selectedProduct.color}</Text>
      <Text>{selectedProduct.size}</Text>
      <Text>{selectedProduct.price}</Text>
      <Button title={currentProductIsFavorite ? 'REMOVE FROM FAVOURITES' : "ADD THIS ITEM TO FAVOURITES"} onPress={() => 
         // props.navigation.navigate('AllItems');
         toggleFavoriteHandler()
      } />

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
