import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const PasswordBox = ({ style, title, onChangeText, errorMessage, isValid }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <Text style={styles.title_text}>{title}</Text>
      <TextInput
        placeholder="* * * * * * * * * * *"
        style={[
          styles.text_input,
          {
            borderColor: isValid ? "#979797" : "#FF4949",
            borderWidth: isValid ? 0.8 : 1.5,
          },
        ]}
        placeholderTextColor="#535353"
        secureTextEntry
        onChangeText={onChangeText}
        keyboardAppearance="dark"
      />
      <Text style={styles.errormessage_text}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },

  title_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFFDE",
    marginBottom: 10,
  },

  text_input: {
    height: 44,
    borderWidth: 0.8,
    borderRadius: 4,
    fontSize: 16,
    color: "#fff",
    paddingLeft: 12,
  },

  errormessage_text: {
    color: "#FF4949",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 0,
  },
});

export default PasswordBox;
