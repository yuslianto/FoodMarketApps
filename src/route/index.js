import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SplashScreen,
  SignIn,
  SignUp,
  AddressSignUp,
  SuccessSignUp,
  Home,
  Order,
  Profile,
  FoodDetail,
  OrderSummary,
  SuccesOrder,
  OrderDetail,
} from '../pages';
import { BottomNavigator } from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApps = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApps"
        component={MainApps}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddressSignUp"
        component={AddressSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccesOrder"
        component={SuccesOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
