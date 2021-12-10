import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Logo } from '../../assets';
import { Gap } from '../../component';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 1000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={30} />
      <Text style={styles.text}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontStyle: 'normal',
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
});
