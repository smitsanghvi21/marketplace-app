import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function ViewImage() {
    return (
        <View style={styles.container}>
                <View style={styles.loginView}/>
                <View style={styles.registerView}/>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    loginView: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        position:'absolute',
        top:50,
        left:10
    },
    registerView: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        position:'absolute',
        top:50,
        right:10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})