import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ text, color = '#FFC700', textColor = 'black', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    paddingVertical: 12,
    //paddingHorizontal: 80,
    borderRadius: 5,
  }),
  text: textColor => ({
    color: textColor,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  }),
});

export default Button;
