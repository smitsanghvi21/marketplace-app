import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//screens
import Welcome from './app/screens/Welcome'
import ViewImage from './app/screens/ViewImage'
import ListDetails from './app/screens/ListDetails'
import Message from './app/screens/Message'
//components
import AppText from './app/components/AppText'
import ReusableButton from './app/components/ReusableButton'
import Card from './app/components/Card'
export default function App () {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})
