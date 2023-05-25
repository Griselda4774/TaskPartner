import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = ({ navigation }) => {
  const clickHandler = () => {
    navigation.navigate("EditTask");
  };
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={clickHandler}>
        <Text>MOVE</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
