/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  Dimensions,
  View,
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../../assets';
import ItemListFood from '../ItemListFood';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} items={3} name="Sop Bumil" price="3.000.000" type="in-progress" />
        <ItemListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} items={3} name="Sop Bumil" price="3.000.000" type="in-progress" />
        <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} items={3} name="Sop Bumil" price="3.000.000" type="in-progress" />
        <ItemListFood image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} items={3} name="Sop Bumil" price="3.000.000" type="in-progress" />
        <ItemListFood image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} items={3} name="Sop Bumil" price="3.000.000" type="in-progress" />
      </View>
    </ScrollView>
  );
};

const PostOrders = () => {
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood image={FoodDummy3} name="Sop Bumil" items={3} price="30.000" date="30 Nov 2021" status="succes" type="past-orders" />
        <ItemListFood image={FoodDummy4} name="Sop Bumil" items={3} price="30.000" date="30 Nov 2021" status="succes" type="past-orders" />
        <ItemListFood image={FoodDummy2} name="Sop Bumil" items={3} price="30.000" date="30 Nov 2021" status="succes" type="past-orders" />
        <ItemListFood image={FoodDummy5} name="Sop Bumil" items={3} price="30.000" date="30 Nov 2021" status="succes" type="past-orders" />
        <ItemListFood image={FoodDummy4} name="Sop Bumil" items={3} price="30.000" date="30 Nov 2021" status="succes" type="past-orders" />
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

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'In Progress' },
    { key: '2', title: 'Post Orders' },
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PostOrders,
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

export default OrderTabSection;

const styles = StyleSheet.create({});
