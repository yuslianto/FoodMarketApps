import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FoodDummy6, IcArrowBackWhite } from '../../assets';
import { Button, Counter, Rating } from '../../component';

const FoodDetail = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcArrowBackWhite onPress={() => navigation.goBack()} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text={'Order Now'}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingVertical: 26,
    paddingHorizontal: 16,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    marginBottom: 6,
  },
  desc: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Reguler',
    fontSize: 14,
    marginBottom: 16,
  },
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Reguler',
    fontSize: 14,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: { flex: 1 },
  button: { width: 163 },
  labelTotal: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Reguler',
    fontSize: 13,
  },
  priceTotal: {
    color: '#020202',
    fontFamily: 'Poppins-Reguler',
    fontSize: 18,
  },
});
