import React from 'react'
import { StyleSheet, View, ImageBackground, Button } from 'react-native'

export default function Home() {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
            <Button title={'Login'} style={styles.loginButton} />
            <Button title={'Register'} style={styles.registerButton} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'black',
        height:70
    },
    registerButton: {
        width: '100%',
        backgroundColor: 'white',
        height:70
    }
})
