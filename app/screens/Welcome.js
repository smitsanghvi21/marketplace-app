import React from 'react'
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Button,
  Text
} from 'react-native'

import ReusableButton from '../components/ReusableButton'

export default function Welcome () {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.text}>Sellify</Text>
        <Text style={styles.subText}>Sell Instantly</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ReusableButton
          style={{ alignItems: 'center' }}
          class='primary'
          name='Login'
        />
        <ReusableButton class='secondary' name='Register' />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    // width: 290
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 100
  },
  text: {
    color: 'red',
    fontSize: 36
  },
  subText: {
    color: 'green',
    fontSize: 18
  }
})
