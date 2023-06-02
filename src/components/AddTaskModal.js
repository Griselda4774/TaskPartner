import React, { useState, useEffect } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import ModalStyles from "./ModalStyles";
import {
  WHITE_TEXT_COLOR,
  GREY_COLOR,
  SCREEN_WIDTH,
  GREY_TEXT_COLOR,
  SCREEN_HEIGHT,
  TITLE_MODAL_WIDTH,
  FULL_BUTTON_WIDTH,
  MODAL_WIDTH,
} from "../constants/constants";
import { SvgXml } from "react-native-svg";
import {
  CloseIcon,
  FlagIcon,
  SendDisabledIcon,
  SendIcon,
  TagIcon,
  TimerIcon,
} from "../constants/Icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import ChooseCategoriesModal from "./ChooseCategoriesModal";
import ChoosePriorityModal from "./ChoosePriorityModal";
import ChooseDateDueModal from "./ChooseDateDueModal";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTaskModal = ({ visible, onRequestClose }) => {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const now = new Date();
  const taskListSorted = [...taskList].sort((a, b) => a.taskID - b.taskID);
  const newID = taskListSorted[taskListSorted.length - 1].taskID + 1;
  now.setHours(now.getHours() + 2);
  const [task, setTask] = useState({
    taskID: newID,
    taskName: "",
    taskDetail: "",
    taskCategory: "Design",
    taskPriority: 1,
    taskDueDate: now.toString(),
    isCompleted: false,
  });
  const [focusedId, setFocusedId] = useState("1");
  useEffect(() => {
    setFocusedId("1");
    setTask({
      taskID: newID,
      taskName: "",
      taskDetail: "",
      taskCategory: "Design",
      taskPriority: 1,
      taskDueDate: now.toString(),
      isCompleted: false,
    });
  }, [visible]);

  useEffect(() => {
    const taskListSorted = [...taskList].sort((a, b) => a.taskID - b.taskID);
    const newID = taskListSorted[taskListSorted.length - 1].taskID + 1;
    setTask((prevTask) => ({ ...prevTask, taskID: newID }));
  }, [taskList]);

  const [enableChooseCategory, setEnableChooseCategory] = useState(false);
  const [enableChoosePriority, setEnableChoosePriority] = useState(false);
  const [enableChooseDateDue, setEnableChooseDateDue] = useState(false);
  const [enableAddTask, setEnableAddTask] = useState(false);
  useEffect(() => {
    setEnableAddTask(task.taskName.length == 0 || task.taskDetail.length == 0);
  }, [task.taskName.length == 0 || task.taskDetail.length == 0]);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.wrapper}>
        <View
          style={{
            backgroundColor: GREY_COLOR,
            width: SCREEN_WIDTH,
            borderRadius: 20,
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <View
            style={[
              styles.title,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.title_white_text}>Add Task</Text>
            </View>
            <TouchableOpacity
              onPress={onRequestClose}
              style={{
                padding: 2,
                backgroundColor: "#FFFFFF30",
                borderRadius: 8,
              }}
            >
              <SvgXml xml={CloseIcon} height={24} width={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TextInput
              style={[
                focusedId == "2"
                  ? null
                  : [
                      {
                        borderWidth: 1,
                        borderColor: "#ffffff80",
                      },
                    ],
                styles.text_input,
              ]}
              textColor={WHITE_TEXT_COLOR}
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("1");
              }}
              placeholder="Task Name"
              placeholderTextColor="#eaeaea90"
              onChangeText={(text) => {
                setTask({ ...task, taskName: text });
              }}
            />
            <TextInput
              style={[
                focusedId == "1"
                  ? null
                  : {
                      borderWidth: 1,
                      borderColor: "#ffffff80",
                    },
                styles.text_input,
              ]}
              textColor={WHITE_TEXT_COLOR}
              selectionColor={WHITE_TEXT_COLOR}
              underlineStyle={{ width: 0 }}
              onFocus={() => {
                setFocusedId("2");
              }}
              placeholder="Task Detail"
              placeholderTextColor="#eaeaea90"
              onChangeText={(text) => {
                setTask({ ...task, taskDetail: text });
              }}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.task_props}>
              <TouchableOpacity
                style={styles.task_props_item}
                onPress={() => {
                  setEnableChooseDateDue(true);
                }}
              >
                <SvgXml xml={TimerIcon} height={28} width={28} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.task_props_item}
                onPress={() => {
                  setEnableChooseCategory(true);
                }}
              >
                <SvgXml xml={TagIcon} height={28} width={28} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.task_props_item}
                onPress={() => {
                  setEnableChoosePriority(true);
                }}
              >
                <SvgXml xml={FlagIcon} height={28} width={28} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.task_props_item}
              disabled={enableAddTask}
              onPress={() => {
                dispatch(addTask(task));
                onRequestClose();
              }}
            >
              {enableAddTask ? (
                <SvgXml xml={SendDisabledIcon} height={28} width={28} />
              ) : (
                <SvgXml xml={SendIcon} height={28} width={28} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ChooseCategoriesModal
        onRequestClose={() => {
          setEnableChooseCategory(false);
        }}
        visible={enableChooseCategory}
        task={task}
      />
      <ChoosePriorityModal
        visible={enableChoosePriority}
        onRequestClose={() => {
          setEnableChoosePriority(false);
        }}
        task={task}
      />
      <ChooseDateDueModal
        visible={enableChooseDateDue}
        onRequestClose={() => {
          setEnableChooseDateDue(false);
        }}
        task={task}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080",
  },
  title: {
    alignItems: "center",
    width: MODAL_WIDTH,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  title_white_text: {
    fontSize: 20,
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Bold",
  },
  body: {
    alignItems: "center",
  },
  text_input: {
    backgroundColor: "transparent",
    borderRadius: 4,
    margin: 4,
    marginTop: 12,
    width: MODAL_WIDTH,
    height: 45,
    fontSize: 16,
    fontFamily: "Lato-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: MODAL_WIDTH + 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  task_props: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  task_props_item: {
    padding: 8,
  },
});

export default AddTaskModal;
