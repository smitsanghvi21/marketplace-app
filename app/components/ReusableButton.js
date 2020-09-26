import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ReusableButton(props) {
  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <TouchableOpacity onPress={handleButtonClick} style={(props.class === 'primary') ? styles.primary : styles.secondary}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#f55442",
    height: 70,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5
  },
  secondary: {
    backgroundColor: "#21bf73",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
