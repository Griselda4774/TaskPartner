import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import TaskInfoList from "../components/TaskInfoList";

const CalenderScreen = () => {


    return (
      <View style={GlobalStyle.container}>
        <View style={{ alignItems: "center", backgroundColor: "#0f0" }}>
          <Text style={styles.header_text}>Calendar</Text>
        </View>
        <View style={{ backgroundColor: "#f0f", height: 130 }}></View>
        <View style={{ backgroundColor: "#ff0", height: 105, marginTop: 30, }}></View>
        <TaskInfoList/>
      </View>
    );
}

const styles = StyleSheet.create({

    header_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 400,
        marginTop: 50,
        marginBottom: 15,
    },

});

export default CalenderScreen;