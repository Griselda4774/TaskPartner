import React from "react";

import { View, Pressable, Text, StyleSheet } from "react-native";
import GlobalStyle from "./GlobalStyle";


const PurpleButton = () => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#8687E780" : "#8687E7",
            margin: 24,
            marginTop: 0,
            marginBottom: 0,
          },
          styles.button,
        ]}
      >
        <Text style={[GlobalStyle.pressable_text, {color: '#fff'}]}>Login</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: "20%",
    borderColor: "#7875FF",
    borderWidth: 2,
  },
});

export default PurpleButton;