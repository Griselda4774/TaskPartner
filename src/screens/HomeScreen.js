import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  WHITE_TEXT_COLOR,
  BLACK_BACKGROUND_COLOR,
} from "../constants/constants";
import { SvgXml } from "react-native-svg";
import HomeScreenBodyWithNoTask from "../components/HomeScreenBodyWithNoTask";
import { RepeatIcon } from "../constants/Icons";
import HomeScreenBodyWithTask from "../components/HomeScreenBodyWithTask";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import AddTaskModal from "../components/AddTaskModal";
import { getTasks, resetTasks } from "../redux/actions";
import { fetchTasks } from "../firebase/task";

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const taskList = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [enableAddTask, setEnableAddTask] = useState(false);

  // Get all task from firestore
  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const tasks = await fetchTasks();
        dispatch(resetTasks());
        dispatch(getTasks(tasks));
      } catch (error) {
        console.log("Error fetching tasks: ", error);
      }
    };

    fetchTasksData();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.avatar_wrapper}
          onPress={() => {
            // let task = [...tasks];
            // task.sort((a, b) => {
            //   return a.taskID - b.taskID;
            // });
            // console.log(task);
            // // updateDocument();
            // addTask(task[task.length - 1].taskID + 1);
            // console.log(task);
            // deleteTask(8);
            console.log(
              taskList.sort((a, b) => {
                a.taskID - b.taskID;
              })
            );
          }}
        >
          <Image
            source={require("../../assets/avatar.jpg")}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.header_title_wrapper}>
          <Text style={styles.header_title_text}>Home</Text>
        </View>
        <View style={styles.icon_wrapper}>
          <SvgXml xml={RepeatIcon} height={32} width={32} />
        </View>
      </View>
      <View style={styles.body}>
        {taskList.length === 0 ? (
          <HomeScreenBodyWithNoTask />
        ) : (
          <HomeScreenBodyWithTask navigation={navigation} taskList={taskList} />
        )}
      </View>

      <AddTaskModal
        visible={enableAddTask}
        onRequestClose={() => {
          setEnableAddTask(false);
        }}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_BACKGROUND_COLOR,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  avatar_wrapper: {},
  avatar: { height: 56, width: 56, borderRadius: 50 },
  header_title_wrapper: {},
  header_title_text: {
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Regular",
    fontSize: 20,
  },
  icon_wrapper: { padding: 8 },
  body: { flex: 1 },
});

export default HomeScreen;
