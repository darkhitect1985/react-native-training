import React from 'react';
import { StyleSheet, ScrollView, Button ,View, FlatList} from 'react-native';


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
      productId: itemData.item.id
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

// CategoryMealScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default AllItems;

