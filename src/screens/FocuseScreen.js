import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const FocuseScreen = () => {
  return (
    <SafeAreaView>
      <Text>Focuse Screen</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default FocuseScreen;
