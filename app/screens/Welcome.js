import React from 'react'
import { StyleSheet, Image, View, ImageBackground, Button, Text } from 'react-native'

export default function Welcome() {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.text}>Sellify</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 60,
    },
    logo: {
        height: 100,
        width: 100,
    },
    text: {
        color: 'red',
        fontSize:36
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'blue',
        height: 70
    },
    registerButton: {
        width: '100%',
        backgroundColor: 'red',
        height: 70
    }
})
