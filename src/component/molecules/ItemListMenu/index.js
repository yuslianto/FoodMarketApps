import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { IcNext } from '../../../assets';

const ItemListMenu = ({ onPress, label }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 14,
    color: '#020202',
  },
});
