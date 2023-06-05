import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

const UsernameBox = ({ style, onChangeText, isValid, title, placeholder, errorMessage }) => {

  return (
    <View style={[styles.container, { ...style }]}>
      <Text style={styles.title_text}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.text_input,
          {
            borderColor: isValid ? "#979797" : "#FF4949",
            borderWidth: isValid ? 0.8 : 1.5,
          },
        ]}
        placeholderTextColor="#535353"
        onChangeText={onChangeText}
      />
      <Text style={styles.errormessage_text}>{errorMessage}</Text>
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

export default UsernameBox;
