import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import ScreenStyle from "../components/ScreenStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IndexImage } from "../constants/Images";
import {
  WHITE_TEXT_COLOR,
  LATO_FONTS,
  BLACK_BACKGROUND_COLOR,
  SCREEN_WIDTH,
} from "../constants/constants";
import { useFonts } from "expo-font";
import { Svg, SvgXml } from "react-native-svg";
import HomeScreenBodyWithNoTask from "../components/HomeScreenBodyWithNoTask";
import { RepeatIcon } from "../constants/Icons";
import HomeScreenBodyWithTask from "../components/HomeScreenBodyWithTask";
import { EmptyTask } from "../../assets/data/EmptyTask";
import { Tasks } from "../../assets/data/Tasks";
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

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [enableAddTask, setEnableAddTask] = useState(false);

  // Get all task from firestore
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksRef = collection(FIRESTORE_DB, "Task");
        const querySnapshot = await getDocs(tasksRef);

        const fetchedTasks = [];
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          fetchedTasks.push(task);
        });

        setTasks(fetchedTasks);
      } catch (error) {
        console.log("Error fetching tasks: ", error);
      }
    };

    fetchTasks();
  }, []);

  // Add task to firestore
  const addTask = async (taskID) => {
    try {
      const newDocRef = await addDoc(collection(FIRESTORE_DB, "Task"), {
        taskID: taskID,
        taskName: "New task 999",
        taskDetail: "New task 999 detail",
        taskCategory: "Work",
        taskPriority: 4,
        taskDueDate: "2021-10-10",
        isCompleted: false,
      });
      console.log("Document written with ID: ", newDocRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  // Update task to firestore
  // 1) Get document id
  const findDocumentId = async (taskID) => {
    const q = query(
      collection(FIRESTORE_DB, "Task"),
      where("taskID", "==", taskID)
    );
    try {
      const querySnapshot = await getDocs(q);
      let documentId;
      querySnapshot.forEach((doc) => {
        documentId = doc.id;
      });
      return documentId;
    } catch (error) {
      console.log("Error finding document id: ", error);
    }
  };

  // 2) Update document
  const updateDocument = async (item) => {
    const documentId = await findDocumentId(item.taskID);
    try {
      await updateDoc(doc(FIRESTORE_DB, "Task", documentId), {
        taskName: item.taskName,
        taskDetail: item.taskDetail,
        taskCategory: item.taskCategory,
        taskPriority: item.taskPriority,
        taskDueDate: item.taskDueDate,
        isCompleted: item.isCompleted,
      });
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  // Delete task from firestore
  const deleteTask = async (taskID) => {
    const documentId = await findDocumentId(taskID);
    try {
      await deleteDoc(doc(FIRESTORE_DB, "Task", documentId));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.log("Error deleting document: ", error);
    }
  };

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
