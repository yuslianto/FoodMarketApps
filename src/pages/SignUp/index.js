import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Gap, Header, TextInput } from '../../component';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onPress={() => navigation.goBack()}
        onBack={() => { }}
      />
      <View style={styles.container}>
        <View style={styles.wrapperCircle}>
          <View style={styles.cirle}>
            <View style={styles.inCircle}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput title="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" onPress={() => navigation.navigate('AddressSignUp')} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
  wrapperCircle: {
    alignItems: 'center',
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
  inCircle: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
