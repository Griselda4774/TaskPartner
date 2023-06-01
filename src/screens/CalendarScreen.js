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
import { ScrollView } from "react-native-virtualized-view";

import GlobalStyle from "../components/GlobalStyle";
import TaskInfoList from "../components/TaskInfoList";
import TaskStateButton from "../components/TaskStateButton";
import CalendarTopBar from "../components/CalendarTopBar";

const CalenderScreen = ({ navigation }) => {

  const [isTodayPressed, SetIsTodayPressed] = useState(true);
  const [isCompletedPressed, SetIsCompletedPressed] = useState(false);

  function onTodayPressedHandler()
  {
    if(!isTodayPressed)
    {
      SetIsTodayPressed(!isTodayPressed);
      SetIsCompletedPressed(!isCompletedPressed);
    }
  }

  function onCompletedPressedHandler() {
    if(!isCompletedPressed)
    {
      SetIsCompletedPressed(!isCompletedPressed);
      SetIsTodayPressed(!isTodayPressed);
    }
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.header_text}>Calendar</Text>
      </View>
      <View style={{ height: 120 }}>
        <CalendarTopBar/>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.task_state_switch}>
          <TaskStateButton
            title="Today"
            OnPressHandler={onTodayPressedHandler}
            style={{
              backgroundColor:  isTodayPressed  ? "#8687E7" : "#4C4C4C",
              borderColor:  isTodayPressed  ? "#8687E7" : "#C0C0C0",
            }}
          />
          <TaskStateButton
            title="Completed"
            OnPressHandler={onCompletedPressedHandler}
            style={{
              backgroundColor:  isTodayPressed  ? "#4C4C4C" : "#8687E7",
              borderColor:  isTodayPressed  ? "#C0C0C0" : "#8687E7",
            }}
          />
        </View>
        <TaskInfoList title={"All Tasks"} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task_state_switch: {
    alignItems: "center",
    justifyContent: "center",
    height: 105,
    marginTop: 25,
    backgroundColor: "#4C4C4C",
    flexDirection: "row",
  },

  header_text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 400,
    marginTop: 40,
    marginBottom: 15,
  },
});

export default CalenderScreen;
