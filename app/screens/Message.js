import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ItemSeparatorComponent
} from 'react-native'

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
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
  },
  {
    id: 4,
    title: 'T4',
    description: 'D4',
    image: require('../assets/mosh.jpg')
  }
]
export default function Message () {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            name={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log('touched', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />

      <FlatList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
