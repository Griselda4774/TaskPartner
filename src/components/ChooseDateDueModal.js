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
            options={{ backgroundColor: "#000" }}
            current="2023-05-22"
            selected="2023-05-22"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ChooseDateDueModal;
