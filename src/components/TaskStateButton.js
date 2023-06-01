import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const TaskStateButton = (props) => {
  return (
    <Pressable
      onPress={props.OnPressHandler}
      pressed={props.isPress}
      style={[
        styles.button,
        {...props.style}
      ]}
    >
      <Text style={styles.button_text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 137,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    margin: 15,
  },

  button_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default TaskStateButton