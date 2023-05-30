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


export default function LoginScreen({navigation}) {

  // Navigators:
  const onBackPressHandler = () => {
    navigation.navigate("Start_Screen");
  };

  const onRegisterPressHandler = () => {
    navigation.replace("Register_Screen");
  };

  //Use States:
  const [LoginUsername, SetLoginUsername] = useState("");
  const [LoginPassword, SetLoginPassword] = useState("");

  const [IsEmptyLoginInput, SetIsEmptyLoginInput] = useState(true);
  const [IsEmptyLoginUsername, SetIsEmptyLoginUsername] = useState(true);
  const [IsEmptyLoginPassword, SetIsEmptyLoginPassword] = useState(true);

  function onLoginUsernameTextChange(value) {
    SetLoginUsername(value);
    if (LoginUsername.trim().length === 0) SetIsEmptyLoginUsername(true);
    else {
      SetIsEmptyLoginUsername(false);
      if (IsEmptyLoginPassword === false) SetIsEmptyLoginInput(false);
    }
  }

  function onLoginPasswordTextChange(value) {
    SetLoginPassword(value);
    if (LoginPassword.trim().length === 0) SetIsEmptyLoginPassword(true);
    else {
      SetIsEmptyLoginPassword(false);
      if (IsEmptyLoginUsername === false) SetIsEmptyLoginInput(false);
    }
  }

  return (
    // <KeyboardAvoidingWrapper>
    <View style={GlobalStyle.container}>
      <GoBackButton onPressFunction={onBackPressHandler} />
      <Text style={[GlobalStyle.utils_title_text, { marginLeft: 24 }]}>
        Login
      </Text>
      <View style={[styles.login_container, { justifyContent: "center" }]}>
        <UsernameBox
          style={{ marginTop: 55 }}
          onChangeText={onLoginUsernameTextChange}
        />
        <PasswordBox
          style={{ marginBottom: 80, marginTop: 30 }}
          title="Password"
          onChangeText={onLoginPasswordTextChange}
        />
      </View>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton isDisable={IsEmptyLoginInput}/>
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
      <AuthenticateFooter
        footerText="Don't have an account?"
        optionChose="Register"
        onOptionPressFunction={onRegisterPressHandler}
      />
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
