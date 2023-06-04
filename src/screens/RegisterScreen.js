import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import PurpleButton from "../components/PurpleButton";
import GoBackButton from "../components/GoBackButton";
import AuthenticateFooter from "../components/AuthenticateFooter";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

export default function RegisterScreen({navigation}) {
  //Use States:
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const [isEmptyInput, SetIsEmptyInput] = useState(true);
  const [isEmptyUsername, SetIsEmptyUsername] = useState(true);
  const [isEmptyPassword, SetIsEmptyPassword] = useState(true);
  const [isEmptyConfirmPassword, SetIsEmptyConfirmPassword] = useState(true);

  //Navigators:
  const onGoToLoginHandler = () => {
    navigation.popToTop("Login_Screen");
  };

  const onBackPressHandler = () => {
    navigation.navigate("Login_Screen");
  };


  const onRegisterPressHandler = () => {
    navigation.popToTop();
  };

  //Function:
  function onUsernameTextChange(value) {
    SetUsername(value);
    if (username.trim().length === 0) SetIsEmptyUsername(true);
    else {
      SetIsEmptyUsername(false);
      if (isEmptyPassword === false && isEmptyConfirmPassword === false)
        SetIsEmptyInput(false);
    }
  }

  function onPasswordTextChange(value) {
    SetPassword(value);
    if (password.trim().length === 0) SetIsEmptyPassword(true);
    else {
      SetIsEmptyPassword(false);
      if (isEmptyUsername === false && isEmptyConfirmPassword === false)
        SetIsEmptyInput(false);
    }
  }

  function onConfirmPasswordTextChange(value) {
    SetConfirmPassword(value);
    if (confirmPassword.trim().length === 0) SetIsEmptyConfirmPassword(true);
    else {
      SetIsEmptyConfirmPassword(false);
      if (isEmptyUsername === false && isEmptyPassword === false)
        SetIsEmptyInput(false);
    }
  }

  return (
    // <KeyboardAvoidingWrapper>
    <View style={GlobalStyle.container}>
      <GoBackButton onPressFunction={onBackPressHandler} />
      <Text
        style={[
          GlobalStyle.utils_title_text,
          { marginLeft: 24, marginTop: 20 },
        ]}
      >
        Register
      </Text>
      <View
        style={[
          styles.login_container,
          { justifyContent: "center", backgroundColor: "#000" },
        ]}
      >
        <UsernameBox
          style={{ marginTop: 30 }}
          onChangeText={onUsernameTextChange}
        />
        <PasswordBox
          style={{ marginBottom: 30, marginTop: 30 }}
          title="Password"
          onChangeText={onPasswordTextChange}
        />
        <PasswordBox
          style={{ marginBottom: 10 }}
          title="Confirm Password"
          onChangeText={onConfirmPasswordTextChange}
        />
      </View>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton
          viewStyle={{ marginTop: 50 }}
          title="Register"
          onPressFunction={onRegisterPressHandler}
        />
      </View>
      <AuthenticateFooter
        footerText="Already have an account?"
        optionChose="Login"
        onOptionPressFunction={onGoToLoginHandler}
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
