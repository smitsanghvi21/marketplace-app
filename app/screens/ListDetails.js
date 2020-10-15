import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import ListItem from '../components/ListItem'
export default function ListDetails () {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Jacket</Text>
        <Text style={styles.price}>$60</Text>
        <View style={styles.userContainer}>
          <ListItem
            name='Smit Sanghvi'
            total='5 listings'
            image={require('../assets/mosh.jpg')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    color: 'black',
    fontSize: 16
  },
  userContainer: {
    marginVertical: 50
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14
  },
  image: {
    width: '100%',
    height: 200
  }
})
