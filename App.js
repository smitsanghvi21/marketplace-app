import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//screens
import Welcome from "./app/screens/Welcome";
import ViewImage from "./app/screens/ViewImage";

//components
import AppText from "./app/components/AppText";
import ReusableButton from "./app/components/ReusableButton";
export default function App() {
  return (
    <View style={styles.container}>
     <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
