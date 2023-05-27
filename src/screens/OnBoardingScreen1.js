import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";

export default function OnBoardingScreen1({ navigation }) {

  const onSkipPressHandler = () => {
    navigation.navigate('Start_Screen');
  }

  const onNextPressHandler = () => {
    navigation.navigate("OnBoardingScreen_2");
  }

  const [pressableSkipIsHovering, SetPressableSkipIsHovering] = useState(false);

  const SkipPressInHandler = () => {
    SetPressableSkipIsHovering(true);
  }

  const SkipPressOutHandler = () => {
    SetPressableSkipIsHovering(false);
  };

  return (
    <View style={GlobalStyle.container}>
      <Pressable
        style={[GlobalStyle.pressable, { marginTop: 58 }]}
        onPressIn={SkipPressInHandler}
        onPressOut={SkipPressOutHandler}
        onPress={onSkipPressHandler}
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
          SKIP
        </Text>
      </Pressable>
      <View style={GlobalStyle.body}>
        <Image
          source={require("../../assets/onBoardingPic1.png")}
          style={GlobalStyle.image}
        />
        <Text style={GlobalStyle.utils_title_text}>Mange your tasks</Text>
        <Text style={GlobalStyle.utils_info_text}>
          You can easily manage all of your daily tasks in TaskPartner for free
        </Text>
      </View>
      <View style={GlobalStyle.footer_view}>
        <Pressable
          style={[GlobalStyle.pressable]}
        >
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            GlobalStyle.next_pressable,
            { backgroundColor: pressed ? "#9875FF" : "#7875FF" },
          ]}
          onPress={onNextPressHandler}
        >
          <Text style={GlobalStyle.next_pressable_text}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}
