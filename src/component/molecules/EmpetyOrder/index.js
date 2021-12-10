import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IlEmpetyOrder } from '../../../assets';
import { Gap } from '../../atoms';
import Button from '../Button';

const EmpetyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <IlEmpetyOrder />
      <Gap height={24} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Seems like you have not ordered any food yet
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

export default EmpetyOrder;

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
