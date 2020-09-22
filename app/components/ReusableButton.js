import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ReusableButton(props) {
  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonClick} style={(props.class==='primary')?styles.primary:styles.secondary}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  primary: {
    backgroundColor: "red",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  secondary:{
    backgroundColor: "green",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
