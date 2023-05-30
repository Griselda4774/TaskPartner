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

  //Navigators:
  const onGoToLoginHandler = () => {
    navigation.replace("Login_Screen");
  };

  //Use States:
  // const [Username, SetUsername] = useState("");
  // const [Password, SetPassword] = useState("");
  // const [ConfirmPassword, SetConfirmPassword] = useState("");

  // const [IsEmptyInput, SetIsEmptyInput] = useState(true);
  // const [IsEmptyUsername, SetIsEmptyUsername] = useState(true);
  // const [IsEmptyPassword, SetIsEmptyPassword] = useState(true);
  // const [IsEmptyConfirmPassword, SetIsEmptyConfirmPassword] = useState(true);

  // function onUsernameTextChange(value) {
  //   SetUsername(value);
  //   if (Username.trim().length === 0) SetIsEmptyUsername(true);
  //   else {
  //     SetIsEmptyUsername(false);
  //     if (IsEmptyPassword === false && IsEmptyConfirmPassword === false) SetIsEmptyInput(false);
  //   }
  // }

  // function onPasswordTextChange(value) {
  //   SetPassword(value);
  //   if (Password.trim().length === 0) SetIsEmptyPassword(true);
  //   else {
  //     SetIsEmptyPassword(false);
  //     if (IsEmptyUsername === false && IsEmptyConfirmPassword === false) SetIsEmptyInput(false);
  //   }
  // }

  // function onConfirmPasswordTextChange(value) {
  //   SetConfirmPassword(value);
  //   if (ConfirmPassword.trim().length === 0) SetIsEmptyConfirmPassword(true);
  //   else {
  //     SetIsEmptyConfirmPassword(false);
  //     if (IsEmptyUsername === false && IsEmptyPassword === false) SetIsEmptyInput(false);
  //   }
  // }

  return (
    // <KeyboardAvoidingWrapper>
    <View style={GlobalStyle.container}>
      <GoBackButton onPressFunction={onGoToLoginHandler} />
      <Text style={[GlobalStyle.utils_title_text, { marginLeft: 24 }]}>
        Register
      </Text>
      <View
        style={[
          styles.login_container,
          { justifyContent: "center", backgroundColor: "#000" },
        ]}
      >
        <UsernameBox style={{ marginTop: 30 }}/>
        <PasswordBox
          style={{ marginBottom: 30, marginTop: 30 }}
          title="Password"

        />
        <PasswordBox style={{ marginBottom: 10 }} title="Confirm Password" />
      </View>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton viewStyle={{ marginTop: 50 }} />
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
