import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  BLACK_BACKGROUND_COLOR,
  MODAL_WIDTH,
  PURPLE_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_TEXT_COLOR,
  LATO_FONTS,
} from "../constants/constants";
import ModalStyles from "../components/ModalStyles";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import {
  CloseIcon,
  EditIcon,
  TrashIcon,
  TimerIcon,
  TagIcon,
  FlagIcon,
} from "../constants/Icons";
import Categories from "../../assets/data/Categories";
import EditTaskTitleModal from "../components/EditTaskTitleModal";
import EditCategoriesModal from "../components/EditCategoryModal";
import EditPriorityModal from "../components/EditPriorityModal";
import ChooseDateDueModal from "../components/ChooseDateDueModal";
import DeleteTaskModal from "../components/DeleteTaskModal";
import CheckButton from "../components/CheckButton";
import EditDateDueModal from "../components/EditDateDueModal";

const EditTaskScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const [enableEditTitle, setEnableEditTitle] = useState(false);
  const [enableEditCategory, setEnableEditCategory] = useState(false);
  const [enableEditPriority, setEnableEditPriority] = useState(false);
  const [enableEditDueDate, setEnableEditDueDate] = useState(false);
  const [enableDeleteTask, setEnableDeleteTask] = useState(false);

  let item = route.params;

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
        <TouchableOpacity
          style={styles.exit_icon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <SvgXml xml={CloseIcon} height={28} width={28} />
        </TouchableOpacity>
        <View style={styles.task_infor}>
          <CheckButton size={28} task={item} />
          <View style={styles.task_infor_wrapper}>
            <View style={styles.task_infor_container}>
              <Text
                style={{
                  color: WHITE_TEXT_COLOR,
                  fontSize: 24,
                  fontFamily: "Lato-Regular",
                }}
              >
                {item.taskName}
              </Text>
            </View>
            <View style={styles.task_infor_container}>
              <Text style={[ModalStyles.body_text, { opacity: 0.8 }]}>
                {item.taskDetail}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.edit_task_infor_button}
            onPress={() => {
              setEnableEditTitle(true);
            }}
          >
            <SvgXml xml={EditIcon} height={28} width={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.edit_wrapper}>
          <View style={styles.edit_title}>
            <View style={styles.edit_title_icon_wrapper}>
              <SvgXml xml={TimerIcon} height={28} width={28} />
            </View>
            <Text style={ModalStyles.body_text}>Task Time:</Text>
          </View>
          <TouchableOpacity
            style={styles.edit_button}
            onPress={() => {
              setEnableEditDueDate(true);
            }}
          >
            <Text style={styles.edit_button_text}>
              {new Date(item.taskDueDate).toLocaleDateString("en-CL", {
                weekday: "short",
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.edit_wrapper}>
          <View style={styles.edit_title}>
            <View style={styles.edit_title_icon_wrapper}>
              <SvgXml xml={TagIcon} height={28} width={28} />
            </View>
            <Text style={ModalStyles.body_text}>Task Category:</Text>
          </View>
          <TouchableOpacity
            style={styles.edit_button}
            onPress={() => {
              setEnableEditCategory(true);
            }}
          >
            <SvgXml
              xml={
                Categories.find(
                  (category) => category.name == item.taskCategory
                ).icon
              }
              height={28}
              width={28}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.edit_button_text}>{item.taskCategory}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.edit_wrapper}>
          <View style={styles.edit_title}>
            <View style={styles.edit_title_icon_wrapper}>
              <SvgXml xml={FlagIcon} height={28} width={28} />
            </View>
            <Text style={ModalStyles.body_text}>Task Priority:</Text>
          </View>
          <TouchableOpacity
            style={styles.edit_button}
            onPress={() => {
              setEnableEditPriority(true);
            }}
          >
            <Text style={styles.edit_button_text}>{item.taskPriority}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.delete_wrapper}
          onPress={() => {
            setEnableDeleteTask(true);
          }}
        >
          <View style={styles.edit_title_icon_wrapper}>
            <SvgXml xml={TrashIcon} height={28} width={28} />
          </View>
          <Text style={styles.delete_title_text}>Delete Task</Text>
        </TouchableOpacity>
      </View>

      <EditTaskTitleModal
        visible={enableEditTitle}
        onRequestClose={() => {
          setEnableEditTitle(false);
        }}
        task={item}
      />
      <EditCategoriesModal
        visible={enableEditCategory}
        onRequestClose={() => {
          setEnableEditCategory(false);
        }}
        task={item}
      />
      <EditPriorityModal
        visible={enableEditPriority}
        task={item}
        onRequestClose={() => {
          setEnableEditPriority(false);
        }}
      />
      <EditDateDueModal
        visible={enableEditDueDate}
        task={item}
        onRequestClose={() => {
          setEnableEditDueDate(false);
        }}
      />
      <DeleteTaskModal
        visible={enableDeleteTask}
        task={item}
        onRequestClose={() => {
          setEnableDeleteTask(false);
        }}
        navigation={navigation}
      />
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
  },
  task_infor: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
  },
  edit_title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  edit_title_icon_wrapper: { paddingRight: 8 },

  edit_button: {
    height: 50,
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
  },
  delete_title: {},
  delete_title_text: {
    color: "#FF4949",
    fontSize: 16,
    fontFamily: "Lato-Regular",
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
  },
});

export default EditTaskScreen;
