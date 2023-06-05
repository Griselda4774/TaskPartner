import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard, Pressable,
} from "react-native";
import { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import PurpleButton from "../components/PurpleButton";
import ThirdPartyButton from "../components/ThirdPartyButton";
import AuthenticateFooter from "../components/AuthenticateFooter";
import {
  loginUser,
  loginWithGoogle,
  loginWithGoogle2,
  logoutUser,
} from "../firebase/user";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions";

export default function LoginScreen({ navigation }) {
  //Use States:
  const [LoginEmail, SetLoginEmail] = useState("");
  const [LoginPassword, SetLoginPassword] = useState("");

  const [isValidEmail, SetIsValidEmail] = useState(true);
  const [isValidPassword, SetIsValidPassword] = useState(true);

  const [emailErrorMessage, SetEmailErrorMessage] = useState("");
  const [passwordErrorMessage, SetPasswordErrorMessage] = useState("");

  useEffect(() => {
    if (!isValidEmail) {
      if (!checkValidEmail(LoginEmail)) SetEmailErrorMessage("* Invalid email");
      else SetEmailErrorMessage("* Incorrect email");
    }

    if (!isValidPassword) {
      SetPasswordErrorMessage("* Incorrect password");
    }
    if (isValidEmail) {
      SetEmailErrorMessage("");
    }
    if (isValidPassword) {
      SetPasswordErrorMessage("");
    }
  }, [isValidEmail, isValidPassword]);

  // Navigators:
  const onRegisterPressHandler = () => {
    SetIsValidEmail(true);
    SetIsValidPassword(true);
    navigation.navigate("Register_Screen");
  };

  //Function
  function onLoginEmailTextChange(value) {
    SetLoginEmail(value);
    SetIsValidEmail(true);
  }

  function onLoginPasswordTextChange(value) {
    SetLoginPassword(value);
    SetIsValidPassword(true);
  }

  function checkValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const onLoginPressHandler = () => {
    // if (LoginEmail === correctEmail && LoginPassword === correctPassword) {
    //   //Login authenticate
    //   SetIsValidEmail(true);
    //   SetIsValidPassword(true);
    //   alert("Login successful");
    //   try {
    //         loginUser(LoginEmail, LoginPassword);
    //         navigation.replace("BottomTab");
    //         // navigation.navigate("Task");
    //       } catch (error) {
    //           console.log(error);
    //       }
    // } else {
    //   if (LoginEmail !== correctEmail) SetIsValidEmail(false);
    //   if (LoginPassword !== correctPassword) SetIsValidPassword(false);
    // }
    try {
            loginUser(LoginEmail, LoginPassword);
            // navigation.replace("BottomTab");
            navigation.navigate("Task");
          } catch (error) {
              console.log(error);
          }
    
  };

  const onBackGroundPressHandler = () => Keyboard.dismiss();

  const userState = useSelector((state) => state.user.user);
  useEffect(() => {
    console.log("userState: ", userState);
  }, [userState]);

  return (
    // <KeyboardAvoidingWrapper>
    <View style={GlobalStyle.container}>
      <Text
        style={[
          GlobalStyle.utils_title_text,
          { marginLeft: 24, marginTop: 100 },
        ]}
      >
        Login
      </Text>
      <Pressable
        onPress={onBackGroundPressHandler}
        style={[styles.login_container, { justifyContent: "center" }]}
      >
        <UsernameBox
          style={{
            marginTop: 30,
            marginBottom: 30,
          }}
          onChangeText={onLoginEmailTextChange}
          title="Email"
          placeholder="Enter your email"
          errorMessage={emailErrorMessage}
          isValid={isValidEmail}
        />
        <PasswordBox
          style={{ marginBottom: 70, flex: 1 }}
          title="Password"
          onChangeText={onLoginPasswordTextChange}
          errorMessage={passwordErrorMessage}
          isValid={isValidPassword}
        />
      </Pressable>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton title="Login" onPressFunction={onLoginPressHandler} />
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
          onPressFunction={() => {
            try {
              logoutUser();
            } catch (error) {
              console.log(error);
            }
          }}
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
    height: 300,
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
