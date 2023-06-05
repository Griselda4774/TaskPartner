import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const TaskStateButton = ({ onPressHandler, isPress, title, style}) => {
  return (
    <View>
      <Pressable
        onPress={onPressHandler}
        pressed={isPress}
        style={[styles.button, { ...style }]}
      >
        <Text style={styles.button_text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 137,
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 2,
    margin: 15,
  },

  button_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Lato-Regular",
  },
});

export default TaskStateButton