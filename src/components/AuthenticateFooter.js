import React from "react";

import { View, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";

const AuthenticateFooter = ({
  footerText,
  onOptionPressFunction,
  optionChose,
}) => {
  const [pressableOptionIsHovering, SetPressableOptionIsHovering] =
    useState(false);

  const OptionPressInHandler = () => {
    SetPressableOptionIsHovering(true);
  };

  const OptionPressOutHandler = () => {
    SetPressableOptionIsHovering(false);
  };

  //LATER
  // const onBackPressHandler = () => {
  //   navigation.navigate("OnBoardingScreen_1");
  // };

  return (
    <View
      style={{
        justifyContent: "center",
        marginBottom: 40,
        flexDirection: "row",
        marginTop: 20,
      }}
    >
      <Text style={styles.footer_text}>{footerText}</Text>
      <Pressable
        onPressIn={OptionPressInHandler}
        onPressOut={OptionPressOutHandler}
        onPress={onOptionPressFunction}
      >
        <Text
          style={[
            styles.footer_text,
            { color: "#fff", marginLeft: 5 },
            {
              color: pressableOptionIsHovering
                ? "rgba(255, 255, 255, 0.8)"
                : "#fff",
            },
          ]}
        >
          {optionChose}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer_text: {
    fontSize: 14,
    fontWeight: 400,
    color: "#979797",
    fontFamily: "Lato-Regular",
  },
});

export default AuthenticateFooter;
