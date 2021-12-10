import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FoodDummy6 } from '../../assets';
import { Button, Header, ItemListFood, ItemValue } from '../../component';

const OrderSummary = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        onBack
        onPress={() => navigation.goBack()}
        title={'Payment'}
        subTitle={'You deserve better meal'}
      />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood image={FoodDummy6} items={14} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'} />
          <ItemValue label={'Driver'} value={'IDR 50.000'} />
          <ItemValue label={'Tax 10%'} value={'IDR 1.800.390'} />
          <ItemValue
            label={'Total Price'}
            value={'IDR 390.803.000'}
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label={'Name'} value={'Angga Risky'} />
          <ItemValue label={'Phone No.'} value={'0822 0819 9688'} />
          <ItemValue label={'Address'} value={'Setra Duta Palima'} />
          <ItemValue label={'House No.'} value={'A5 Hook'} />
          <ItemValue label={'City'} value={'Bandung'} />
        </View>
        <View style={styles.button}>
          <Button
            text={'Checkout Now'}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'SuccesOrder' }],
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-reguler',
    color: '#8D92A3',
    marginBottom: 8,
  },
  button: { padding: 24, marginTop: 24 },
});
