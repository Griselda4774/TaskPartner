import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { PURPLE_COLOR } from "../constants/constants";
import ModalStyles from "./ModalStyles";
import { LATO_FONTS } from "../constants/constants";
import { useFonts } from "expo-font";

const DeleteTaskModal = () => {
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Modal visible={true} transparent={true}>
      <View style={ModalStyles.wrapper}>
        <View style={ModalStyles.container}>
          <View style={ModalStyles.title}>
            <Text style={ModalStyles.title_white_text}>Delete Task</Text>
          </View>
          <View style={ModalStyles.body}>
            <Text
              style={[
                ModalStyles.body_text,
                { marginTop: 24, marginBottom: 8 },
              ]}
            >
              Are you sure you want to delete this task?
            </Text>
            <Text
              style={[
                ModalStyles.body_text,
                { marginTop: 8, marginBottom: 24 },
              ]}
            >
              Task title: Old task title
            </Text>
          </View>
          <View style={ModalStyles.half_button_wrapper}>
            <TouchableOpacity
              style={ModalStyles.half_button}
              activeOpacity={0.3}
            >
              <Text style={ModalStyles.title_purple_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                ModalStyles.half_button,
                { backgroundColor: PURPLE_COLOR },
              ]}
              activeOpacity={0.3}
            >
              <Text style={ModalStyles.title_white_text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteTaskModal;
