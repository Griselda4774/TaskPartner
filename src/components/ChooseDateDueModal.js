import React from "react";
import { Modal } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import { View } from "react-native";
import ModalStyles from "./ModalStyles";

const ChooseDateDueModal = () => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={ModalStyles.wrapper}>
        <View style={ModalStyles.container}>
          <DatePicker
            mode="calendar"
            current="2023-05-22"
            selected="2023-05-22"
            options={{
              backgroundColor: "#363636",
              textHeaderColor: "#FFFFFFDE",
              textDefaultColor: "#FFFFFFDE",
              selectedTextColor: "#FFFFFFDE",
              mainColor: "#8687E7",
              textSecondaryColor: "#FFFFFFDE",
              borderColor: "#979797",
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ChooseDateDueModal;
