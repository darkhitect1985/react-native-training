import React from 'react';
import { StyleSheet, ScrollView, Button ,View, FlatList, Text,TouchableOpacity} from 'react-native';

import { MaterialCommunityIcons } from 'react-native-vector-icons';





import { PRODUCTS } from '../data/dummy-data';

import CardItem from '../components/CardItem';
import ProductItem from '../components/ProductItem';




// const AllItems = (props) => {
//   // console.log(props);

//   return (
//       <ScrollView style={styles.cards}>
//         <Button title="Move" onPress={() => props.navigation.navigate('Login')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//         <CardItem forwarding= {() => props.navigation.navigate('ToItem')}/>
//       </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   cards: {
//       marginTop:80,
//   },
// });

// export default AllItems;

const AllItems = props => {

  const renderProductItem = itemData => {

    return (
      <CardItem 
         title={itemData.item.title}
         image={itemData.item.imageUrl}
         description={itemData.item.description}
      onSelectProduct ={() => {
      props.navigation.navigate('ToItem', {
        productId: itemData.item.id,
        productTitle: itemData.item.title,
        //isFav: isFavorite     
      });
      }}/>



      //  <ProductItem
      //   title={itemData.item.title}
      //   image={itemData.item.imageUrl}
      //   description={itemData.item.description}
      //   color={itemData.item.color}
      //   size={itemData.item.size}
      //   price={itemData.item.price}
      //   onSelectProduct ={() => {
      //     props.navigation.navigate('ToItem', {
      //       productId: itemData.item.id
      //     });
      //   }}
      // />
    );
  };

  // const catId = props.navigation.getParam('categoryId');

  // const displayedMeals = MEALS.filter(
  //   meal => meal.categoryIds.indexOf(catId) >= 0
  // );

  return (
    <View style={styles.screen}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};




//this is new test
export const  screenOptions = navData => {
  const productTitle = navData.route.params.productTitle;
  const isFavorite = navData.route.params.isFav;
  return {
    headerTitle: productTitle,
    headerRight: ({ color, size }) => (
      <TouchableOpacity>
        <MaterialCommunityIcons name={isFavorite ? 'star' : 'star-outline'} color={'grey'} size={22}
        onPress= {() => console.log('star pressed success')}
        /> 
      </TouchableOpacity>
    ),

}
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default AllItems;

