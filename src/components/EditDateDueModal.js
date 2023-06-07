import React, { useState, useEffect } from "react";
import DatePicker from "react-native-modern-datepicker";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import ModalStyles from "./ModalStyles";
import {
  GREY_COLOR,
  GREY_TEXT_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/actions";
import { updateDocumentToFirestore } from "../firebase/task";

const EditDateDueModal = ({ visible, onRequestClose, task }) => {
  const [dateString, setDateString] = useState(
    new Date(task.taskDueDate).toLocaleDateString("en-CA")
  );
  const [timeString, setTimeString] = useState(
    new Date(task.taskDueDate).toLocaleString("en-CA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  const [dateChanged, setDateChanged] = useState(false);
  useEffect(() => {
    setDateString(new Date(task.taskDueDate).toLocaleDateString("en-CA"));
    setTimeString(
      new Date(task.taskDueDate).toLocaleString("en-CA", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
    setDateChanged(false);
  }, [visible]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={ModalStyles.wrapper}>
        <View style={ModalStyles.container}>
          <View style={ModalStyles.body}>
            <DatePicker
              options={{
                backgroundColor: GREY_COLOR,
                textHeaderColor: PURPLE_COLOR,
                textDefaultColor: WHITE_TEXT_COLOR,
                selectedTextColor: "#fff",
                mainColor: PURPLE_COLOR,
                textSecondaryColor: GREY_TEXT_COLOR,
                borderColor: GREY_TEXT_COLOR,
                textFontSize: 16,
                textHeaderFontSize: 18,
              }}
              mode="datepicker"
              current={dateString}
              selected={dateString}
              minuteInterval={1}
              onDateChange={(date) => {
                setDateString(date);
                setDateChanged(true);
              }}
              onTimeChange={(time) => {
                setTimeString(time);
              }}
            />
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
                  if (dateChanged) {
                    const [year, month, day] = dateString.split("/");
                    const [hours, minutes] = timeString.split(":");
                    task.taskDueDate = new Date(
                      year,
                      month - 1,
                      day,
                      hours,
                      minutes
                    ).toString();
                  } else {
                    const [year, month, day] = dateString.split("-");
                    const [hours, minutes] = timeString.split(":");
                    task.taskDueDate = new Date(
                      year,
                      month - 1,
                      day,
                      hours,
                      minutes
                    ).toString();
                  }
                  dispatch(editTask(task));
                  if (user.userID !== "") {
                    updateDocumentToFirestore(task);
                  }
                  onRequestClose();
                }}
              >
                <Text style={ModalStyles.title_white_text}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditDateDueModal;
