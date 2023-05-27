import React from "react";

import { Text, Pressable } from "react-native";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

const GoBackButton = (props) => {

    const [pressableBackIsHovering, SetPressableBackIsHovering] =
      useState(false);

    const BackPressInHandler = () => {
      SetPressableBackIsHovering(true);
    };

    const BackPressOutHandler = () => {
      SetPressableBackIsHovering(false);
    };
    
    return (
      <Pressable
        style={[GlobalStyle.pressable, { marginTop: 58 }]}
        onPressIn={BackPressInHandler}
        onPressOut={BackPressOutHandler}
        onPress={props.onPressFunction}
      >
        <Text
          style={[
            GlobalStyle.pressable_text,
            {
              color: pressableBackIsHovering
                ? "#fff"
                : "rgba(255, 255, 255, 0.44)",
            },
          ]}
        >
          BACK
        </Text>
      </Pressable>
    );
};

export default GoBackButton;