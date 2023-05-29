import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default ProfileScreen;
