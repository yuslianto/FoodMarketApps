import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { EmpetyOrder, Header, OrderTabSection } from '../../component';

const Order = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmpetyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};
// add comment section
export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
