import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { SearchIcon } from "../constants/Icons";
import {
  GREY_COLOR,
  GREY_TEXT_COLOR,
  LATO_FONTS,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { useFonts } from "expo-font";
import ExpandableComponent from "./ExpandableComponent";
import { ScrollView } from "react-native-virtualized-view";

const HomeScreenBodyWithTask = ({ navigation, taskList }) => {
  const [keySearch, setKeySearch] = useState("");
  return (
    <View style={styles.body}>
      <View style={styles.search_bar}>
        <View>
          <SvgXml xml={SearchIcon} height={24} width={24} />
        </View>
        <View style={{ width: "85%" }}>
          <TextInput
            placeholder="Search for your task..."
            placeholderTextColor={GREY_COLOR}
            style={styles.search_input}
            keyboardAppearance="dark"
            onChangeText={(text) => {
              setKeySearch(text);
            }}
          />
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ExpandableComponent
          title={"Tasks"}
          navigation={navigation}
          listItem={taskList.filter(
            (task) =>
              task.taskName.toLowerCase().includes(keySearch.toLowerCase()) &&
              !task.isCompleted
          )}
          titleWidth={104}
        />
        <ExpandableComponent
          title={"Completed"}
          navigation={navigation}
          listItem={taskList.filter(
            (task) =>
              task.taskName.toLowerCase().includes(keySearch.toLowerCase()) &&
              task.isCompleted
          )}
          titleWidth={136}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 20,
    width: "100%",
    // borderWidth: 3,
    // borderColor: "red",
  },
  search_bar: {
    width: "100%",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1D1D1D",
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: GREY_TEXT_COLOR,
    // borderWidth: 3,
    // borderColor: "red",
  },
  search_input: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: WHITE_TEXT_COLOR,
    width: "100%",
    marginLeft: 8,
    // borderWidth: 3,
    // borderColor: "red",
  },
});

export default HomeScreenBodyWithTask;
