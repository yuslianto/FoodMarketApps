import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlSuccesSignUp } from '../../assets';
import { Button, Gap } from '../../component';

const SuccessSignUp = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IlSuccesSignUp />
      <Gap height={24} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Now you are able to order some foods as a self-reward
      </Text>
      <Gap height={24} />
      <View style={styles.button}>
        <Button
          text="Find Foods"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainApps' }],
            })
          }
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 80,
  },
  title: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 20,
    color: '#020202',
  },
  subTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  button: {
    width: 200,
  },
});
