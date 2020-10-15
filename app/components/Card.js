import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import AppText from './AppText'
export default function Card (props) {
  const { title, price, image } = props

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
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
