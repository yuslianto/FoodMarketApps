import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IlPicProfile } from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={IlPicProfile} style={styles.profilePic} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  wrapperText: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Lihgt',
    color: '#8D92A3',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
