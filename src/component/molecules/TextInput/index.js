import React from 'react';
import { View, Text, StyleSheet, TextInput as Input } from 'react-native';

const TextInput = ({ title, placeholder }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Input placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 8,
    marginTop: 6,
  },
});

export default TextInput;
