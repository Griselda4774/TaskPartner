import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import ModalStyles from "./ModalStyles";
import {
  GREY_COLOR,
  GREY_TEXT_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";

const ChooseDateDueModal = ({ visible, onRequestClose, task }) => {
  let now = new Date();
  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("00:00");
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
              current={now.toLocaleDateString("en-CA")}
              selected={now.toLocaleDateString("en-CA")}
              minuteInterval={1}
              onDateChange={(date) => {
                setDateString(date);
              }}
              onTimeChange={(time) => {
                setTimeString(time);
              }}
            />
            <View style={ModalStyles.half_button_wrapper}>
              <TouchableOpacity
                style={ModalStyles.half_button}
                activeOpacity={0.3}
                onPress={() => {
                  now.setHours(now.getHours() + 1);
                  task.taskDueDate = now.toString();
                  onRequestClose();
                }}
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
                  const [year, month, day] = dateString.split("/");
                  const [hours, minutes] = timeString.split(":");
                  task.taskDueDate = new Date(
                    year,
                    month - 1,
                    day,
                    hours,
                    minutes
                  ).toString();
                  onRequestClose();
                }}
              >
                <Text style={ModalStyles.title_white_text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseDateDueModal;
