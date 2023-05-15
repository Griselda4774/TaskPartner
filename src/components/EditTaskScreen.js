import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  BLACK_BACKGROUND_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_TEXT_COLOR,
} from "../constants/Constants";
import ModalStyles from "./ModalStyles";
import { LATO_FONTS } from "../constants/Constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const EditTaskScreen = () => {
  const [taskSelected, setTaskSelected] = useState(false);
  const checkButtonOnPressHandler = () => {
    setTaskSelected(!taskSelected);
  };
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: BLACK_BACKGROUND_COLOR,
      }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.exit_icon}>
            <Image source={require("../../assets/otherIcons/close.png")} />
          </TouchableOpacity>
          <View style={styles.task_infor}>
            <TouchableOpacity
              style={
                taskSelected
                  ? [styles.check_button, { backgroundColor: "#ffffff95" }]
                  : [styles.check_button, { backgroundColor: "#363636" }]
              }
              onPress={checkButtonOnPressHandler}
            />
            <View style={styles.task_infor_wrapper}>
              <View style={styles.task_infor_container}>
                <Text
                  style={{
                    color: WHITE_TEXT_COLOR,
                    fontSize: 24,
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Task title
                </Text>
              </View>
              <View style={styles.task_infor_container}>
                <Text style={[ModalStyles.body_text, { opacity: 0.8 }]}>
                  Task description
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.edit_task_infor_button}>
              <Image
                source={require("../../assets/otherIcons/edit.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.edit_wrapper}>
            <View style={styles.edit_title}>
              <Image
                source={require("../../assets/otherIcons/timer.png")}
                style={styles.icon}
              />
              <Text style={ModalStyles.body_text}>Task Time:</Text>
            </View>
            <TouchableOpacity style={styles.edit_button}>
              <Text style={styles.edit_button_text}>To day at 00:00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.edit_wrapper}>
            <View style={styles.edit_title}>
              <Image
                source={require("../../assets/otherIcons/tag.png")}
                style={styles.icon}
              />
              <Text style={ModalStyles.body_text}>Task Category:</Text>
            </View>
            <TouchableOpacity style={styles.edit_button}>
              <Image
                source={require("../../assets/categoriesIcon/universityWithoutBG.png")}
                style={{ marginRight: 16 }}
              />
              <Text style={styles.edit_button_text}>University</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.edit_wrapper}>
            <View style={styles.edit_title}>
              <Image
                source={require("../../assets/otherIcons/flag.png")}
                style={styles.icon}
              />
              <Text style={ModalStyles.body_text}>Task Priority:</Text>
            </View>
            <TouchableOpacity style={styles.edit_button}>
              <Text style={styles.edit_button_text}>To day at 00:00</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.delete_wrapper}>
            <Image
              source={require("../../assets/otherIcons/trash.png")}
              style={styles.icon}
            />
            <Text style={styles.delete_title_text}>Delete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
    marginRight: 8,
  },
  container: {
    backgroundColor: BLACK_BACKGROUND_COLOR,
    width: SCREEN_WIDTH,
    padding: 20,
    height: SCREEN_HEIGHT,
  },
  wrapper: {
    flex: 0.52,
    justifyContent: "space-between",
  },

  exit_icon: {
    backgroundColor: "#1D1D1D",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 8,
    //marginTop: 10,
    //marginBottom: 18,
  },
  task_infor: {
    justifyContent: "space-between",
    flexDirection: "row",
    //marginTop: 18,
    //marginBottom: 18,
  },
  check_button: {
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: WHITE_TEXT_COLOR,
    marginTop: 10,
    //marginBottom: 10,
  },
  task_infor_wrapper: {
    width: 250,
  },
  task_infor_container: {
    padding: 5,
  },
  edit_task_infor_button: {
    marginTop: 10,
    marginBottom: 10,
  },

  edit_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginTop: 18,
    //marginBottom: 18,
  },
  edit_title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  edit_button: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff21",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  edit_button_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 12,
    fontFamily: "Lato-Regular",
  },
  delete_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    //marginBottom: 18,
  },
  delete_title: {},
  delete_title_text: {
    color: "#FF4949",
    fontSize: 16,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.5,
  },
});

export default EditTaskScreen;
