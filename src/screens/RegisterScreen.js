import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Pressable } from "react-native";
import { useState, useEffect } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import PurpleButton from "../components/PurpleButton";
import GoBackButton from "../components/GoBackButton";
import AuthenticateFooter from "../components/AuthenticateFooter";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

export default function RegisterScreen({navigation}) {
  //Use States:
  const [email, SetEmail] = useState("");
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const [isValidEmail, SetIsValidEmail] = useState(true);
  const [isValidFirstName, SetIsValidFirstName] = useState(true);
  const [isValidLastName, SetIsValidLastName] = useState(true);
  const [isValidPassword, SetIsValidPassword] = useState(true);
  const [isValidConfirmPassword, SetIsValidConfirmPassword] = useState(true);

  const [emailErrorMessage, SetEmailErrorMessage] = useState("");
  const [firstNameErrorMessage, SetFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, SetLastNameErrorMessage] = useState("");
  const [passwordErrorMessage, SetPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, SetConfirmPasswordErrorMessage] = useState("");

  useEffect(() => {
    if (!isValidEmail)
      SetEmailErrorMessage("* Invalid email");
    if (!isValidFirstName) {
      SetFirstNameErrorMessage("* Empty input");
    }
    if (!isValidLastName) {
      SetLastNameErrorMessage("* Empty input");
    }
    if (!isValidPassword) {
      SetPasswordErrorMessage("* Password must contains at least 5 characters");
    }
    if (!isValidConfirmPassword) {
      SetConfirmPasswordErrorMessage("* Confirm password does not match");
    }

    if (isValidEmail) {
      SetEmailErrorMessage("");
    }
    if (isValidFirstName) {
      SetFirstNameErrorMessage("");
    }
    if (isValidLastName) {
      SetLastNameErrorMessage("");
    }
    if (isValidPassword) {
      SetPasswordErrorMessage("");
    }
    if (isValidConfirmPassword) {
      SetConfirmPasswordErrorMessage("");
    }
  }, [isValidEmail, isValidPassword, isValidFirstName, isValidLastName, isValidConfirmPassword]);


  //Navigators:
  const onGoToLoginHandler = () => {
    navigation.popToTop();
  };

  const onBackPressHandler = () => {
    navigation.navigate("Login_Screen");
  };

  //Function:
  function onEmailTextChange(value) {
    SetEmail(value);
    SetIsValidEmail(true);
  }

  function onLastNameTextChange(value) {
    SetLastName(value);
    SetIsValidLastName(true);
  }

  function onFirstNameTextChange(value) {
    SetFirstName(value);
    SetIsValidFirstName(true);
  }
  
  function onPasswordTextChange(value) {
    SetPassword(value);
    SetIsValidPassword(true);
  }

  function onConfirmPasswordTextChange(value) {
    SetConfirmPassword(value);
    SetIsValidConfirmPassword(true);
  }

  const onBackGroundPressHandler = () => Keyboard.dismiss();

  function checkValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const onRegisterPressHandler = () => {      

      if(lastName.trim().length < 1 || firstName.trim().length < 1 || !(checkValidEmail(email)) 
        || password.trim().length < 5 || (confirmPassword !== password || confirmPassword.trim().length === 0))
      {
        if (lastName.trim().length < 1) SetIsValidLastName(false);

        if (firstName.trim().length < 1) SetIsValidFirstName(false);

        if (!checkValidEmail(email)) SetIsValidEmail(false);

        if (password.trim().length < 5) SetIsValidPassword(false);

        if (confirmPassword !== password || confirmPassword.trim().length === 0)
          SetIsValidConfirmPassword(false);
      }
      else
      {
        alert("Register successful");
      }
  };

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
      <Pressable
        onPress={onBackGroundPressHandler}
        style={[
          styles.login_container,
          { justifyContent: "center", backgroundColor: "#000" },
        ]}
      >
        <View style={{ flexDirection: "row", flex: 1, marginTop: 20, }}>
          <UsernameBox
            style={{ marginTop: 0, flex: 1 }}
            onChangeText={onLastNameTextChange}
            title="Last Name"
            placeholder="Enter your last name"
            isValid={isValidLastName}
            errorMessage={lastNameErrorMessage}
          />

          <UsernameBox
            style={{ marginTop: 0, flex: 2, marginLeft: 30 }}
            onChangeText={onFirstNameTextChange}
            title="First Name"
            placeholder="Enter your first name"
            isValid={isValidFirstName}
            errorMessage={firstNameErrorMessage}
          />
        </View>

        <UsernameBox
          style={{ flex: 1 }}
          onChangeText={onEmailTextChange}
          title="Email"
          placeholder="Enter your email"
          isValid={isValidEmail}
          errorMessage={emailErrorMessage}
        />

        <PasswordBox
          style={{ flex: 1 }}
          title="Password"
          onChangeText={onPasswordTextChange}
          isValid={isValidPassword}
          errorMessage={passwordErrorMessage}
        />
        <PasswordBox
          style={{ flex: 1 }}
          title="Confirm Password"
          onChangeText={onConfirmPasswordTextChange}
          isValid={isValidConfirmPassword}
          errorMessage={confirmPasswordErrorMessage}
        />
      </Pressable>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton viewStyle={{ marginTop: 30, height: "33%" }} title="Register" onPressFunction={onRegisterPressHandler} />
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
    flex: 2,
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
