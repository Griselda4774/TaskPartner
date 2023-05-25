import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";

export default function LoginScreen() {
  const onBackPressHandler = () => {
    navigation.navigate("OnBoardingScreen_1");
  };

  const [pressableSkipIsHovering, SetPressableSkipIsHovering] = useState(false);

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
          BACK
        </Text>
      </Pressable>
      <Text style={[GlobalStyle.utils_title_text, { marginLeft: 24 }]}>
        Login
      </Text>
      <View style={[styles.login_container, { justifyContent: "center" }]}>
        <UsernameBox style={{ marginTop: 55 }}></UsernameBox>
        <PasswordBox style={{ marginBottom: 55 }}></PasswordBox>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.login_flexbox_container}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#8687E780" : "#8875FF",
                margin: 24,
                marginTop: 0,
                marginBottom: 0,
              },
              styles.button,
            ]}
          >
            <Text style={[GlobalStyle.pressable_text]}>Login</Text>
          </Pressable>

          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: StyleSheet.hairlineWidth,
              height: '10%',
              marginTop: 0,
              margin: 24,
            }}
          /> 

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9875FF" : "#000",
                margin: 24,
                marginTop: 10,
              },
              styles.button,
            ]}
          >
            <Text style={styles.button_text}>Login with Google</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#9875FF" : "#000",
                margin: 24,
                marginTop: 0,
              },
              styles.button,
            ]}
          >
            <Text style={styles.button_text}>Login with Facebook</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.footer_text}>Don't have an account?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login_flexbox_container: {
    backgroundColor: "#000",
    height: "100%",
  },

  login_container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000",
  },

  login_info_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "background: #FFFFFFDE",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: "20%",
    borderColor: "#7875FF",
    borderWidth: 2,
  },

  button_text: {
    fontWeight: 500,
    fontSize: 20,
    color: "#fff",
  },

  footer_text: {
    fontSize: 12,
    fontWeight: 400,
    color: "#979797",
  },
});
