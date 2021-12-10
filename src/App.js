import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import { SignIn, SplashScreen } from './pages';
import Router from './route';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
