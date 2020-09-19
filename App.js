import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './app/screens/Welcome';
import ViewImage from './app/screens/ViewImage';

import AppText from './app/components/AppText';
export default function App() {
  return (
    <View style={styles.container}>
      <AppText txt="hello world" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})