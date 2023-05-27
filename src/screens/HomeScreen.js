import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import ScreenStyle from "../components/ScreenStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IndexImage } from "../constants/Images";
import {
  WHITE_TEXT_COLOR,
  LATO_FONTS,
  BLACK_BACKGROUND_COLOR,
  SCREEN_WIDTH,
} from "../constants/Constants";
import { useFonts } from "expo-font";
import { Svg, SvgXml } from "react-native-svg";
import HomeScreenBodyWithNoTask from "../components/HomeScreenBodyWithNoTask";
import { RepeatIcon } from "../constants/Icons";
import HomeScreenBodyWithTask from "../components/HomeScreenBodyWithTask";
import { EmptyTask } from "../../assets/data/EmptyTask";
import { Tasks } from "../../assets/data/Tasks";

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }
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
        {console.log(Tasks)}
        <TouchableOpacity style={styles.avatar_wrapper}>
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
        {Tasks.length === 0 ? (
          <HomeScreenBodyWithNoTask />
        ) : (
          <HomeScreenBodyWithTask />
        )}
      </View>
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
