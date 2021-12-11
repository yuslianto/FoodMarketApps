import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.price}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}> {status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
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
  date: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 10,
    color: '#8D92A3',
  },
  status: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 10,
    color: '#D9435E',
  },
});
