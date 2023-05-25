import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  BLACK_BACKGROUND_COLOR,
  MODAL_WIDTH,
  PURPLE_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_TEXT_COLOR,
} from "../constants/Constants";
import ModalStyles from "../components/ModalStyles";
import { LATO_FONTS } from "../constants/Constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CloseIcon from "../../assets/otherIcons/close.svg";
import EditIcon from "../../assets/otherIcons/edit.svg";
//import TrashIcon from "../../assets/otherIcons/trash.svg";
import TimerIcon from "../../assets/otherIcons/timer.svg";
import TagIcon from "../../assets/otherIcons/tag.svg";
import FlagIcon from "../../assets/otherIcons/flag.svg";
import { SvgUri, SvgXml, WithLocalSvg } from "react-native-svg";

const EditTaskScreen = () => {
  //const trashIcon = require("../../assets/otherIcons/trash.svg");
  const insets = useSafeAreaInsets();
  const [taskSelected, setTaskSelected] = useState(false);
  const checkButtonOnPressHandler = () => {
    setTaskSelected(!taskSelected);
    // console.log(require("fs").readdirSync("../../assets/otherIcons/trash.svg"));
  };
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "space-between",
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 20,
          paddingLeft: insets.left + 20,
          paddingRight: insets.right + 20,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.exit_icon}>
          <CloseIcon height={24} width={24} />
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
            <EditIcon height={28} width={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.edit_wrapper}>
          <View style={styles.edit_title}>
            <View style={styles.edit_title_icon_wrapper}>
              <TimerIcon height={28} width={28} />
            </View>
            <Text style={ModalStyles.body_text}>Task Time:</Text>
          </View>
          <TouchableOpacity style={styles.edit_button}>
            <Text style={styles.edit_button_text}>To day at 00:00</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.edit_wrapper}>
          <View style={styles.edit_title}>
            <View style={styles.edit_title_icon_wrapper}>
              <TagIcon height={28} width={28} />
            </View>
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
            <View style={styles.edit_title_icon_wrapper}>
              <FlagIcon height={28} width={28} />
            </View>
            <Text style={ModalStyles.body_text}>Task Priority:</Text>
          </View>
          <TouchableOpacity style={styles.edit_button}>
            <Text style={styles.edit_button_text}>To day at 00:00</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.delete_wrapper}>
          <View style={styles.edit_title_icon_wrapper}>
            {/* <TrashIcon height={28} width={28} /> */}
          </View>
          <Text style={styles.delete_title_text}>Delete Task</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.edit_task_button} activeOpacity={0.3}>
        <Text style={styles.edit_task_button_text}>Edit Task</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
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
    height: SCREEN_HEIGHT,
    flex: 1,
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
    padding: 8,
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
  edit_title_icon_wrapper: { paddingRight: 8 },

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
  edit_task_button: {
    alignItems: "center",
    padding: 20,
    backgroundColor: PURPLE_COLOR,
    width: MODAL_WIDTH,
    alignSelf: "center",
    margin: 15,
    borderRadius: 8,
  },
  edit_task_button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.5,
  },
});

export default EditTaskScreen;
