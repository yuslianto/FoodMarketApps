import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Rating from '../Rating';

const FoodCard = ({ img }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.picture} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Health</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  picture: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  text: {
    fontFamily: 'Poppins_reguler',
    fontSize: 14,
    color: '#020202',
  },
});
