import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <Text>Calendar Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default CalendarScreen;
