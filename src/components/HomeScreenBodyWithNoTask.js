import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { IndexImage } from "../constants/Images";
import {
  SCREEN_WIDTH,
  LATO_FONTS,
  WHITE_TEXT_COLOR,
} from "../constants/Constants";
import { useFonts } from "expo-font";

const HomeScreenBodyWithNoTask = () => {
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <View style={styles.body}>
      <View style={styles.image_wrapper}>
        <SvgXml
          xml={IndexImage}
          width={SCREEN_WIDTH * 0.64}
          height={SCREEN_WIDTH * 0.64}
        />
      </View>
      <View style={styles.question_text_wrapper}>
        <Text style={styles.question_text}>What's your plan for today?</Text>
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.text}>Tap + to add your tasks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "16%",
  },
  image_wrapper: { padding: 8 },
  question_text_wrapper: { padding: 8 },
  question_text: {
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Regular",
    fontSize: 20,
  },
  text_wrapper: { padding: 8 },
  text: { color: WHITE_TEXT_COLOR, fontFamily: "Lato-Regular", fontSize: 16 },
});

export default HomeScreenBodyWithNoTask;
