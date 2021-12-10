import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Gap, Header, Select, TextInput } from '../../component';

const AddressSignUp = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make it's your valid"
        onPress={() => navigation.goBack()}
        onBack={() => { }}
      />
      <View style={styles.container}>
        <TextInput title="Phone number" placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput title="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput title="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.navigate('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default AddressSignUp;

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
});
