import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { AntDesign } from '@expo/vector-icons'
const DeleteSwipe = props => {
  const { renderRightActions } = props
  return (
    <View
      onPress={() => console.log('delete it')}
      style={styles.container}
    >
      <AntDesign name='delete' size={24} color='white' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5252'
  }
})

export default DeleteSwipe
