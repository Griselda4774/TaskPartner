import React from "react";

import { Text, Pressable } from "react-native";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../constants/Icons";

const GoBackButton = ({ buttonStyle, onPressFunction }) => {
  const [pressableBackIsHovering, SetPressableBackIsHovering] = useState(false);

  const BackPressInHandler = () => {
    SetPressableBackIsHovering(true);
  };

  const BackPressOutHandler = () => {
    SetPressableBackIsHovering(false);
  };

  return (
    <Pressable
      style={[GlobalStyle.pressable, { marginTop: 58 }, { ...buttonStyle }]}
      onPressIn={BackPressInHandler}
      onPressOut={BackPressOutHandler}
      onPress={onPressFunction}
      hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
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
        <SvgXml xml={BackIcon} width={10} height={20} />
      </Text>
    </Pressable>
  );
};

export default GoBackButton;