import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { PURPLE_COLOR, WHITE_TEXT_COLOR } from "../constants/constants";
import { SvgXml } from "react-native-svg";
import { TickIcon } from "../constants/Icons";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import { updateDocumentToFirestore } from "../firebase/task";

const CheckButton = ({ size, style, task }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  return (
    <TouchableOpacity
      style={[
        !isChecked
          ? {
              borderColor: WHITE_TEXT_COLOR,
            }
          : {
              borderColor: PURPLE_COLOR,
            },
        style,
        {
          width: size,
          height: size,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          borderWidth: size / 12,
        },
      ]}
      onPress={() => {
        setIsChecked(!isChecked);
        let newTask = task;
        newTask.isCompleted = !isChecked;
        dispatch(editTask(newTask));
        updateDocumentToFirestore(newTask);
      }}
    >
      {isChecked ? (
        <Image
          source={require("../../assets/otherIcons/tick.png")}
          style={{ height: 24, width: 24, tintColor: "#8687E7" }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckButton;
