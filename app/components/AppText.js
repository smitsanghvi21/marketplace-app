import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'

export default function AppText(props) {
    return (
        <View>
            <Text style={styles.textStyle}>{props.txt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'red',
        ...Platform.select({
            fontFamily: Platform.OS === 'android' ? "Avenir" : "Roboto"
        })


    }
})