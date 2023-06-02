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

const EditDateDueModal = ({ visible, onRequestClose, task }) => {
  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("");

  const [date, setDate] = useState(
    new Date(task.taskDueDate).toLocaleDateString("en-CA")
  );
  useEffect(() => {
    setDate(new Date(task.taskDueDate).toLocaleDateString("en-CA"));
  }, [visible]);

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
              current={date}
              selected={date}
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
                  const [year, month, day] = dateString.split("/");
                  const [hours, minutes] = timeString.split(":");
                  console.log(
                    `${year}, ${month}, ${day}, ${hours}, ${minutes}`
                  );
                  console.log(
                    new Date(year, month - 1, day, hours, minutes).toString()
                  );
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
