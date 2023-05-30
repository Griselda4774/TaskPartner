import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { PURPLE_COLOR, WHITE_TEXT_COLOR } from "../constants/Constants";
import ModalStyles from "./ModalStyles";
import { LATO_FONTS } from "../constants/Constants";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-paper";

const EditTaskTitleModal = () => {
  const [focusedId, setFocusedId] = useState("1");
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Modal visible={true} transparent={true}>
      <View style={ModalStyles.wrapper}>
        <View style={ModalStyles.container}>
          <View style={ModalStyles.title}>
            <Text style={ModalStyles.title_white_text}>Edit Task Title</Text>
          </View>
          <View style={ModalStyles.body}>
            <TextInput
              style={
                focusedId == "2"
                  ? ModalStyles.text_input
                  : [
                      ModalStyles.text_input,
                      {
                        borderWidth: 1,
                        borderColor: "#ffffff80",
                        paddingLeft: 8,
                      },
                    ]
              }
              textColor={focusedId == "2" ? "#eaeaea90" : WHITE_TEXT_COLOR}
              defaultValue="Old Task title"
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("1");
              }}
            />
            <TextInput
              style={
                focusedId == "1"
                  ? ModalStyles.text_input
                  : [
                      ModalStyles.text_input,
                      {
                        borderWidth: 1,
                        borderColor: "#ffffff80",
                        paddingLeft: 8,
                      },
                    ]
              }
              textColor={focusedId == "1" ? "#eaeaea90" : WHITE_TEXT_COLOR}
              defaultValue="Old Task description"
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("2");
              }}
            />
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
              <Text style={ModalStyles.title_white_text}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskTitleModal;
