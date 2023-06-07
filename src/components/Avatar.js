import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { PURPLE_COLOR, WHITE_TEXT_COLOR } from "../constants/constants";

const Avatar = ({ size, style }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <View
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    >
      <Text style={[styles.avatar_text, { fontSize: size / 2 }]}>
        {user.lastName[0]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PURPLE_COLOR,
  },
  avatar_text: { color: WHITE_TEXT_COLOR, textAlign: "center" },
});

export default Avatar;
