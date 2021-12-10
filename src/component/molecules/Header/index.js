import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { IC_ArrowBack } from '../../../assets';

const Header = ({ title, subTitle, onPress, onBack }) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <View style={styles.back}>
            <IC_ArrowBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 24,
    paddingHorizontal: 24,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 16,
    marginRight: 10,
    marginLeft: -16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});

export default Header;
