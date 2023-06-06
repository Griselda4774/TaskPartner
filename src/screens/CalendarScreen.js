import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { useState } from "react";

import GlobalStyle from "../components/GlobalStyle";
import TaskInfoList from "../components/TaskInfoList";
import TaskStateButton from "../components/TaskStateButton";
import CalendarTopBar from "../components/CalendarTopBar";
import { useSelector } from "react-redux";

const CalenderScreen = ({ navigation }) => {
  const taskList = useSelector((state) => state.tasks.tasks);

  const [isTodayPressed, SetIsTodayPressed] = useState(true);
  const [isCompletedPressed, SetIsCompletedPressed] = useState(false);
  const [selectedDate, SetSelectedDate] = useState(new Date());

  const handleSelectedDateReceived = (date) => {
    SetSelectedDate(date);
  };

  function onTodayPressedHandler() {
    if (!isTodayPressed) {
      SetIsTodayPressed(!isTodayPressed);
      SetIsCompletedPressed(!isCompletedPressed);
    }
  }

  function onCompletedPressedHandler() {
    if (!isCompletedPressed) {
      SetIsCompletedPressed(!isCompletedPressed);
      SetIsTodayPressed(!isTodayPressed);
    }
  }

  return (
    <View style={[GlobalStyle.container, { alignItems: "center" }]}>
      <Text style={[GlobalStyle.screen_header_text, { marginTop: 50 }]}>
        Calendar
      </Text>
      <View style={{ height: 120 }}>
        <CalendarTopBar
          onSelectedDateReceived={handleSelectedDateReceived}
          taskList={taskList}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={[styles.task_state_switch, { marginHorizontal: 8 }]}>
          <TaskStateButton
            title="Today"
            onPressHandler={onTodayPressedHandler}
            style={{
              backgroundColor: isTodayPressed ? "#8687E7" : "#4C4C4C",
              borderColor: isTodayPressed ? "#8687E7" : "#C0C0C0",
            }}
          />
          <TaskStateButton
            title="Completed"
            onPressHandler={onCompletedPressedHandler}
            style={{
              backgroundColor: isTodayPressed ? "#4C4C4C" : "#8687E7",
              borderColor: isTodayPressed ? "#C0C0C0" : "#8687E7",
            }}
          />
        </View>
        <TaskInfoList
          navigation={navigation}
          isCompletedMode={isCompletedPressed}
          selectedDate={selectedDate}
          taskList={taskList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task_state_switch: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    marginTop: 20,
    borderColor: "#4C4C4C",
    borderWidth: 2,
    flexDirection: "row",
  },
});

export default CalenderScreen;
