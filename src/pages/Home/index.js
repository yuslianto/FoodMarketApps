import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../assets';
import { FoodCard, HomeProfile, HomeTabSection } from '../../component';

const Home = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              <FoodCard img={FoodDummy1} />
              <FoodCard img={FoodDummy2} />
              <FoodCard img={FoodDummy3} />
              <FoodCard img={FoodDummy4} />
              <FoodCard img={FoodDummy5} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: { flex: 1 },
  foodContainer: { flexDirection: 'row', marginVertical: 24, marginLeft: 24 },
  tabContainer: { flex: 1 },
});
