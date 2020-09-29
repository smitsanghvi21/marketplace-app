import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ListItem(props) {
  const { image, name, total } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.accountContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.total}>{total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  accountContainer: {},
  name: {
    fontWeight: "500",
  },
  total: {
    color: "#6e6969",
  },
});
