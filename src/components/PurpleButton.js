import React from "react";

import { Pressable, Text, StyleSheet, View } from "react-native";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

const PurpleButton = ({ viewStyle, onPressFunction, style, title }) => {
  return (
    <View style={[styles.container, { ...viewStyle }]}>
      {/* {IsDisable ? (
          <Pressable
            disabled={props.isDisable}
            onPress={props.onPressFunction}
            style={[
              {
                backgroundColor: "#8687E780",
                flex: 1,
              },
              styles.button,
              { ...props.style },
            ]}
          >
            <Text style={[GlobalStyle.pressable_text, { color: "#fff" }]}>
              Login
            </Text>
          </Pressable>
        ) : (
          <Pressable
            disabled={props.isDisable}
            onPress={props.onPressFunction}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#8687E780" : "#8687E7",
                flex: 1,
              },
              styles.button,
              { ...props.style },
            ]}
          >
            <Text style={[GlobalStyle.pressable_text, { color: "#fff" }]}>
              Login
            </Text>
          </Pressable>
        )} */}
      <Pressable
        onPress={onPressFunction}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#8687E780" : "#8687E7",
            flex: 1,
          },
          styles.button,
          { ...style },
        ]}
      >
        <Text style={[GlobalStyle.pressable_text, { color: "#fff" }]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 64,
    borderColor: "#7875FF",
    borderWidth: 2,
    margin: 24,
    marginTop: 0,
    marginBottom: 0,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PurpleButton;
