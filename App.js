import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './app/screens/Welcome';
import ViewImage from './app/screens/ViewImage';
export default function App() {
  return (
    <View style={styles.container}>
      <ViewImage />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})