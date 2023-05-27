import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import OnBoardingStyle from "../components/GlobalStyle";

export default function OnBoardingScreen2({ navigation }) {

  const onSkipPressHandler = () => {
    navigation.navigate("Start_Screen");
  };

  const onBackPressHandler = () => {
    navigation.navigate("OnBoardingScreen_1");
  };

  const onNextPressHandler = () => {
    navigation.navigate("OnBoardingScreen_3");
  };
    
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
          source={require("../../assets/onBoardingPic2.png")}
          style={OnBoardingStyle.image}
        />
        <Text style={OnBoardingStyle.utils_title_text}>Mange your tasks</Text>
        <Text style={OnBoardingStyle.utils_info_text}>
          In TaskPartner you can create your personalized routine to stay productive
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
