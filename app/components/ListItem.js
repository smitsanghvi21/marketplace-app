import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default function ListItem (props) {
  const { image, name, description, total, onPress } = props
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor='#DDDDDD'
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.accountContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.total}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  accountContainer: {},
  name: {
    fontWeight: '500'
  },
  total: {
    color: '#6e6969'
  }
})
