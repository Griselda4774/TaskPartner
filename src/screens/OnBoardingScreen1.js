import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import OnBoardingStyle from "../components/GlobalStyle";

export default function OnBoardingScreen1({ navigation }) {

  const onSkipPressHandler = () => {
    navigation.navigate('StartScreen');
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
    <View style={OnBoardingStyle.container}>
      <Pressable
        style={[OnBoardingStyle.pressable, { marginTop: 58 }]}
        onPressIn={SkipPressInHandler}
        onPressOut={SkipPressOutHandler}
        onPress={onSkipPressHandler}
      >
        <Text
          style={[
            OnBoardingStyle.pressable_text,
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
      <View style={OnBoardingStyle.body}>
        <Image
          source={require("../../assets/onBoardingPic1.png")}
          style={OnBoardingStyle.image}
        />
        <Text style={OnBoardingStyle.utils_title_text}>Mange your tasks</Text>
        <Text style={OnBoardingStyle.utils_info_text}>
          You can easily manage all of your daily tasks in TaskPartner for free
        </Text>
      </View>
      <View style={OnBoardingStyle.footer_view}>
        <Pressable
          style={[OnBoardingStyle.pressable]}
        >
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            OnBoardingStyle.next_pressable,
            { backgroundColor: pressed ? "#9875FF" : "#7875FF" },
          ]}
          onPress={onNextPressHandler}
        >
          <Text style={OnBoardingStyle.next_pressable_text}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}
