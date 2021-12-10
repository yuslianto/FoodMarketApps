import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICAdd, ICMin } from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICMin />
      </TouchableOpacity>
      <Text style={styles.label}>4</Text>
      <TouchableOpacity>
        <ICAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    marginHorizontal: 8,
  },
});
