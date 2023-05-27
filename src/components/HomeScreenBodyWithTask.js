import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreenBodyWithTask = () => {
  return <View style={styles.body}></View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "16%",
    borderWidth: 3,
    borderColor: "red",
  },
});

export default HomeScreenBodyWithTask;
