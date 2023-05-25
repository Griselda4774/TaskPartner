import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import OnBoardingStyle from "../components/GlobalStyle";

export default function OnBoardingScreen3({ navigation }) {

  const onSkipPressHandler = () => {
    navigation.navigate("StartScreen");
  };

  const onBackPressHandler = () => {
    navigation.navigate("OnBoardingScreen_2");
  };

  const onStartPressHandler = () => {
    navigation.navigate("StartScreen");
  };


//LATER
//   const onNextPressHandler = () => {
//     navigation.navigate("");
//   }

  const [pressableSkipIsHovering, SetPressableSkipIsHovering] = useState(false);

  const SkipPressInHandler = () => {
    SetPressableSkipIsHovering(true);
  };

  const SkipPressOutHandler = () => {
    SetPressableSkipIsHovering(false);
  };

  const [pressableBackIsHovering, SetPressableBackIsHovering] = useState(false);

  const BackPressInHandler = () => {
    SetPressableBackIsHovering(true);
  };

  const BackPressOutHandler = () => {
    SetPressableBackIsHovering(false);
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
          source={require("../../assets/onBoardingPic3.png")}
          style={OnBoardingStyle.image}
        />
        <Text style={OnBoardingStyle.utils_title_text}>Mange your tasks</Text>
        <Text style={OnBoardingStyle.utils_info_text}>
          You can organize your daily tasks by adding your tasks into separate
          categories
        </Text>
      </View>
      <View style={OnBoardingStyle.footer_view}>
        <Pressable
          style={[OnBoardingStyle.pressable]}
          onPressIn={BackPressInHandler}
          onPressOut={BackPressOutHandler}
          onPress={onBackPressHandler}
        >
          <Text
            style={[
              OnBoardingStyle.pressable_text,
              {
                color: pressableBackIsHovering
                  ? "#fff"
                  : "rgba(255, 255, 255, 0.44)",
              },
            ]}
          >
            BACK
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            OnBoardingStyle.next_pressable,
            {
              backgroundColor: pressed ? "#9875FF" : "#7875FF",
              width: 150,
              height: 48,
              marginLeft: 175,
            },
          ]}
          onPress={onStartPressHandler}
        >
          <Text style={OnBoardingStyle.next_pressable_text}>GET STARTED</Text>
        </Pressable>
      </View>
    </View>
  );
}
