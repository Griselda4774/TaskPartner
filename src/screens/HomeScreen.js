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
import { fetchTasks, fetchTasksByUser } from "../firebase/task";
import { logoutUser } from "../firebase/user";
import Avatar from "../components/Avatar";

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const taskList = useSelector((state) => state.tasks.tasks);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [enableAddTask, setEnableAddTask] = useState(false);

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
        <TouchableOpacity style={styles.icon_wrapper}></TouchableOpacity>
        <View
          style={[
            styles.header_title_wrapper,
            user.isLogin ? { marginLeft: 52 } : {},
          ]}
        >
          <Text style={styles.header_title_text}>Home</Text>
        </View>
        <TouchableOpacity
          style={styles.avatar_wrapper}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          {user.isLogin ? <Avatar size={52} /> : null}
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {taskList.length == 0 ? (
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
    fontSize: 22,
  },
  icon_wrapper: {},
  body: { flex: 1 },
});

export default HomeScreen;
