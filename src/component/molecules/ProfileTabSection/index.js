/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import ItemListMenu from '../ItemListMenu';

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Edit Profile'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Home Address'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Security'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Payments'} />
      </View>
    </ScrollView>
  );
};

const FoodMarket = () => {
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Rate App'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Help Center'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Privacy & Policy'} />
        <ItemListMenu onPress={() => navigation.navigate('OrderDetail')} label={'Terms & Conditions'} />
      </View>
    </ScrollView>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '0.11%',
      marginLeft: '0.11%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
      marginLeft: 12,
    }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Account' },
    { key: '2', title: 'FoodMarket' },
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
