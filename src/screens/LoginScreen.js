import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import PurpleButton from "../components/PurpleButton";
import GoBackButton from "../components/GoBackButton";
import ThirdPartyButton from "../components/ThirdPartyButton";
import AuthenticateFooter from "../components/AuthenticateFooter";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default function LoginScreen() {


  return (
    // <KeyboardAvoidingWrapper>
    <View style={GlobalStyle.container}>
      <GoBackButton />
      <Text style={[GlobalStyle.utils_title_text, { marginLeft: 24 }]}>
        Login
      </Text>
      <View style={[styles.login_container, { justifyContent: "center" }]}>
        <UsernameBox style={{ marginTop: 55 }}></UsernameBox>
        <PasswordBox style={{ marginBottom: 80 }}></PasswordBox>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.login_flexbox_container}>
          <PurpleButton />
          <View
            style={{
              borderBottomColor: "#fff",
              borderBottomWidth: StyleSheet.hairlineWidth,
              height: "10%",
              marginTop: 0,
              margin: 24,
            }}
          />
          <ThirdPartyButton
            thirdPartyName="Google"
            pressableStyle={{ marginTop: 10 }}
            imageSource={require("../../assets/googleIcon.png")}
          />
          <ThirdPartyButton
            thirdPartyName="Facebook"
            pressableStyle={{ marginTop: 0 }}
            imageSource={require("../../assets/facebookIcon.png")}
          />
        </View>
      </View>
      <AuthenticateFooter footerText="Don't have an account?" optionChose="Register" />
    </View>
    // </KeyboardAvoidingWrapper>
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
    paddingBottom: 1,
  },

  login_info_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "background: #FFFFFFDE",
  },

});
