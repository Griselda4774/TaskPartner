import React from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";

const TaskInfoList = () => {
  return (
    <View
      style={[
        GlobalStyle.container,
        { alignItems: "center", justifyContent: "center", paddingHorizontal: 24, },
      ]}
    >

      <FlatList>

      </FlatList>

    </View>
  );
};

const styles = StyleSheet.create({});

export default TaskInfoList;
