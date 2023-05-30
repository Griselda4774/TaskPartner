import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { WHITE_TEXT_COLOR } from "../constants/constants";

const CheckButton = ({ size, style }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={
        checked
          ? [
              styles.check_button,
              { width: size, height: size },
              { backgroundColor: "#ffffff95" },
              style,
            ]
          : [
              styles.check_button,
              { width: size, height: size },
              { backgroundColor: "#363636" },
              style,
            ]
      }
      onPress={() => setChecked(!checked)}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  check_button: {
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: WHITE_TEXT_COLOR,
  },
});

export default CheckButton;
