import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './app/screens/Welcome';
export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})