import React from "react";

import { View, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";


const AuthenticateFooter = (props) => {

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
        }}
      >
        <Text style={styles.footer_text}>{props.footerText}</Text>
        <Pressable
          onPressIn={OptionPressInHandler}
          onPressOut={OptionPressOutHandler}
          onPress={props.onOptionPressFunction}
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
            {props.optionChose}
          </Text>
        </Pressable>
      </View>
    );
};

const styles = StyleSheet.create({

  footer_text: {
    fontSize: 12,
    fontWeight: 400,
    color: "#979797",
  },

});

export default AuthenticateFooter;