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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy5} onPress={() => navigation.navigate('FoodDetail')} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy4} onPress={() => navigation.navigate('FoodDetail')} rating="5" name="Sop Bumil" price="30.000" />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood image={FoodDummy3} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy4} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy2} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy5} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy4} rating="5" name="Sop Bumil" price="30.000" />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  return (
    <ScrollView>
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        <ItemListFood image={FoodDummy5} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy4} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy4} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy3} rating="5" name="Sop Bumil" price="30.000" />
        <ItemListFood image={FoodDummy1} rating="5" name="Sop Bumil" price="30.000" />
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'New Taste' },
    { key: '2', title: 'Popular' },
    { key: '3', title: 'Recommended' },
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
