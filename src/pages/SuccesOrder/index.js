import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlSuccesOrder, IlSuccesSignUp } from '../../assets';
import { Button, Gap } from '../../component';

const SuccesOrder = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IlSuccesOrder />
      <Gap height={24} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Just stay at home while we are preparing your best foods
      </Text>
      <Gap height={24} />
      <View style={styles.button}>
        <Button
          text="Order Other Foods"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainApps' }],
            })
          }
        />
      </View>
      <Gap height={12} />
      <View style={styles.button}>
        <Button
          text="View My Order"
          color="#8D92A3"
          textColor="white"
          // onPress={() =>
          //   navigation.reset({
          //     index: 0,
          //     routes: [{ name: 'MainApps' }],
          //   })
          // }
          onPress={() => navigation.replace('MainApps', { screen: 'Order' })}
        />
      </View>
    </View>
  );
};

export default SuccesOrder;

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
