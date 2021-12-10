import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Rating from '../Rating';

const ItemListFood = ({ image, onPress, rating, items }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.label}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        {rating && !items && <Rating />}
        {items && !rating && <Text style={styles.price}>{items} items</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  image: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 12,
  },
  content: { flex: 1 },
  label: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 13,
    color: '#8D92A3',
  },
});
