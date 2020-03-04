import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const ProductItem = props => {
  return (
    // <View style={styles.productItem}>
    //   <TouchableOpacity onPress={props.onSelectProduct}>

    //   <ImageBackground
    //            source={{ uri: props.image }}
    //            style={styles.bgImage}
    //          >

    //   <Text style={styles.title} numberOfLines={1}>
    //              {props.title}
    //            </Text>


    //                     </ImageBackground>

    //   </TouchableOpacity>
    // </View>
    

    <View style={styles.productItem}>
      <TouchableOpacity onPress={props.onSelectProduct}>
        <View>
          <View>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.productRow, ...styles.productDetail }}>
            <Text>{props.description}</Text>
            <Text>{props.size}</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

 const styles = StyleSheet.create({
   productItem: {
     height: 200,
     width: '100%',
     backgroundColor: '#f5f5f5',
     borderRadius: 10,
     overflow: 'hidden',
     marginVertical: 10
   },
   bgImage: {
     width: '100%',
     height: '100%',
     justifyContent: 'flex-start',
   },
  productRow: {
    flexDirection: 'row'
  },
  productHeader: {
    height: '85%'
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
   title: {
     fontSize: 20,
     color: 'white',
     textAlign: 'center'
   }
 });

export default ProductItem;
