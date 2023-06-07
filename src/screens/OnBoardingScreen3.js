import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";

export default function OnBoardingScreen3({ navigation }) {
  const onBackPressHandler = () => {
    navigation.navigate("OnBoardingScreen_2");
  };

  const onStartPressHandler = () => {
    navigation.replace("Start_Screen");
  };

  const [pressableBackIsHovering, SetPressableBackIsHovering] = useState(false);

  const BackPressInHandler = () => {
    SetPressableBackIsHovering(true);
  };

  const BackPressOutHandler = () => {
    SetPressableBackIsHovering(false);
  };

  return (
    <View style={GlobalStyle.container}>
      <View style={[GlobalStyle.body, { marginTop: 85 }]}>
        <Image
          source={require("../../assets/onBoardingPic3.png")}
          style={GlobalStyle.image}
        />
        <Text style={GlobalStyle.utils_title_text}>Organize your tasks</Text>
        <Text style={GlobalStyle.utils_info_text}>
          You can organize your daily tasks by adding your tasks into separate
          categories
        </Text>
      </View>
      <View style={GlobalStyle.footer_view}>
        <Pressable
          style={[GlobalStyle.pressable]}
          onPressIn={BackPressInHandler}
          onPressOut={BackPressOutHandler}
          onPress={onBackPressHandler}
        >
          <Text
            style={[
              GlobalStyle.pressable_text,
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
            GlobalStyle.next_pressable,
            {
              backgroundColor: pressed ? "#9875FF" : "#7875FF",
              width: 150,
              height: 48,
              marginLeft: 175,
            },
          ]}
          onPress={onStartPressHandler}
        >
          <Text style={GlobalStyle.next_pressable_text}>GET STARTED</Text>
        </Pressable>
      </View>
    </View>
  );
}
