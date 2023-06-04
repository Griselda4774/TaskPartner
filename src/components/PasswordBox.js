import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const PasswordBox = ({ style, title, onChangeText }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <Text style={styles.title_text}>{title}</Text>
      <TextInput
        placeholder="* * * * * * * * * * *"
        style={styles.text_input}
        placeholderTextColor="#535353"
        secureTextEntry
        onChangeText={onChangeText}
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

export default PasswordBox;