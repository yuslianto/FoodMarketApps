import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../../component';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    console.warn('email :', email);
    console.warn('password :', password);
  };
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <TextInput
          title="Email Address"
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          title="Password"
          placeholder="Type your password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          text="Sign In"
          onPress={
            onSubmit
            // () =>
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'MainApps' }],
            // })
          }
        />
        <Gap height={16} />
        <Button
          text="Create New Account"
          color={'#8D92A3'}
          textColor={'white'}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
