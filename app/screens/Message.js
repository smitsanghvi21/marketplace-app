import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
export default function Message () {
  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D2',
      image: require('../assets/mosh.jpg')
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/mosh.jpg')
    },
    {
      id: 3,
      title: 'T3',
      description: 'D3',
      image: require('../assets/mosh.jpg')
    }
  ]
  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
      <FlatList />
    </View>
  )
}

const styles = StyleSheet.create({})
