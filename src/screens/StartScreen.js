import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../constants/Icons";


export default function StartScreen({ navigation }){

    const onBackPressHandler = () => {
        navigation.navigate("OnBoardingScreen_1");
    }

    const onLoginPressHandler = () => {
      navigation.navigate("Authenticate");
    }

    const [pressableSkipIsHovering, SetPressableSkipIsHovering] =
      useState(false);

    const SkipPressInHandler = () => {
      SetPressableSkipIsHovering(true);
    };

    const SkipPressOutHandler = () => {
      SetPressableSkipIsHovering(false);
    };

    return (
      <View style={GlobalStyle.container}>
        <Pressable
          style={[GlobalStyle.pressable, { marginTop: 58 }]}
          onPressIn={SkipPressInHandler}
          onPressOut={SkipPressOutHandler}
          onPress={onBackPressHandler}
          hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
        >
          <Text
            style={[
              GlobalStyle.pressable_text,
              {
                color: pressableSkipIsHovering
                  ? "#fff"
                  : "rgba(255, 255, 255, 0.44)",
              },
            ]}
          >
            <SvgXml xml={BackIcon} width={10} height={20}/>
          </Text>
        </Pressable>
        <View style={GlobalStyle.body}>
          <Text
            style={[
              GlobalStyle.utils_title_text,
              { fontSize: 35, marginTop: 75 },
            ]}
          >
            Welcome to TaskPartner
          </Text>
          <Text style={[GlobalStyle.utils_info_text, { fontSize: 20 }]}>
            Please login by your Google account or continue with Guest mode
          </Text>
        </View>
        <View style={styles.footer_container}>
          <Pressable
            onPress={onLoginPressHandler}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9875FF" : "#7875FF",
                width: 150,
                height: 48,
              },
              styles.button,
            ]}
          >
            <Text style={styles.button_text}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9875FF" : "#000",
                width: 150,
                height: 48,
              },
              styles.button,
            ]}
          >
            <Text style={styles.button_text}>GUEST</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 370,
    height: 48,
    borderColor: "#7875FF",
    borderWidth: 2,
    margin: 12,
  },

  button_text: {
    fontWeight: 500,
    fontSize: 20,
    color: "#fff",
  },

  footer_container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 200,
  },
});