import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const UsernameBox = (props) => {
  return (
    <View style={[styles.container, { ...props.style }]}>
      <Text style={styles.title_text}>Username</Text>
      <TextInput
        placeholder="Enter your username"
        style={styles.text_input}
        placeholderTextColor="#535353"
        onChangeText={props.onChangeText}
        keyboardAppearance="dark"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  title_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFFDE",
    marginBottom: 10,
  },

  text_input: {
    height: 48,
    borderWidth: 0.8,
    borderColor: "#979797",
    borderRadius: 4,
    fontSize: 16,
    color: "#fff",
    paddingLeft: 12,
  },
});

export default UsernameBox;
