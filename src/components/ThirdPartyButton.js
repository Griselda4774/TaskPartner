import React from "react";

import { Pressable, Text, StyleSheet, Image, View } from "react-native";

const ThirdPartyButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#9875FF" : "#000",
          margin: 24,
        },
        styles.button,
        { ...props.pressableStyle },
      ]}
      onPress={props.onPressFunction}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={[styles.container, { flex: 1 }]}>
          <Image
            style={[styles.image, { ...props.imageStyle }]}
            source={props.imageSource}
          />
        </View>

        <View style={{ flex: 5, justifyContent: "center", marginLeft: 60 }}>
          <Text style={styles.button_text}>
            Login with {props.thirdPartyName}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: "20%",
    borderColor: "#7875FF",
    borderWidth: 2,
  },

  button_text: {
    fontWeight: 500,
    fontSize: 20,
    color: "#fff",
  },

  image: {
    width: 24,
    height: 24,
  },
});

export default ThirdPartyButton;
