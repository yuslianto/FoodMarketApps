import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IlPicProfile } from '../../assets/Dummy';
import { ProfileTabSection } from '../../component';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.wrapperCircle}>
          <View style={styles.cirle}>
            <Image source={IlPicProfile} style={styles.img} />
          </View>
          <Text style={styles.name}>Angga Risky</Text>
          <Text style={styles.gmail}>wepanda@gmail.com</Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  wrapperCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  cirle: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'cover',
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#020202',
    textAlign: 'center',
  },
  gmail: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
