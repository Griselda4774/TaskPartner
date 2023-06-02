import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import {
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
  LATO_FONTS,
} from "../constants/constants";
import ModalStyles from "./ModalStyles";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";

const EditTaskTitleModal = ({ visible, onRequestClose, task }) => {
  const [focusedId, setFocusedId] = useState("1");
  useEffect(() => {
    setFocusedId("1");
  }, [visible]);

  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(task.taskName);
  const [taskDetail, setTaskDetail] = useState(task.taskDetail);

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="slide"
    >
      <View style={ModalStyles.wrapper}>
        <View style={[ModalStyles.container, { marginBottom: 64 }]}>
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
                        paddingLeft: 4,
                      },
                    ]
              }
              textColor={focusedId == "2" ? "#eaeaea90" : WHITE_TEXT_COLOR}
              defaultValue={task.taskName}
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("1");
              }}
              onChangeText={(text) => {
                setTaskName(text);
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
                        paddingLeft: 4,
                      },
                    ]
              }
              textColor={focusedId == "1" ? "#eaeaea90" : WHITE_TEXT_COLOR}
              defaultValue={task.taskDetail}
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("2");
              }}
              onChangeText={(text) => {
                setTaskDetail(text);
              }}
            />
          </View>
          <View style={ModalStyles.half_button_wrapper}>
            <TouchableOpacity
              style={ModalStyles.half_button}
              activeOpacity={0.3}
              onPress={onRequestClose}
            >
              <Text style={ModalStyles.title_purple_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                ModalStyles.half_button,
                { backgroundColor: PURPLE_COLOR },
              ]}
              activeOpacity={0.3}
              onPress={() => {
                task.taskName = taskName;
                task.taskDetail = taskDetail;
                dispatch(editTask(task));
                onRequestClose();
              }}
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
