import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import GlobalStyle from "../components/GlobalStyle";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import PurpleButton from "../components/PurpleButton";
import GoBackButton from "../components/GoBackButton";
import AuthenticateFooter from "../components/AuthenticateFooter";
import { addUserToFirestore, registerUser } from "../firebase/user";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { useDispatch, useSelector } from "react-redux";
import { login, updateUserState } from "../redux/actions";
import { useIsFocused } from "@react-navigation/native";

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user);

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
  const [confirmPasswordErrorMessage, SetConfirmPasswordErrorMessage] =
    useState("");

  useEffect(() => {
    if (!isValidEmail) SetEmailErrorMessage("* Invalid email");
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
  }, [
    isValidEmail,
    isValidPassword,
    isValidFirstName,
    isValidLastName,
    isValidConfirmPassword,
  ]);

  useEffect(() => {
    SetEmail("");
    SetFirstName("");
    SetLastName("");
    SetPassword("");
    SetConfirmPassword("");
  }, [useIsFocused()]);

  //Navigators:
  const onGoToLoginHandler = () => {
    navigation.popToTop();
  };

  const onBackPressHandler = () => {
    navigation.goBack();
  };

  //Function:
  function onEmailTextChange(value) {
    SetEmail(value.toLowerCase());
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

  const onRegisterPressHandler = async () => {
    if (
      lastName.trim().length < 1 ||
      firstName.trim().length < 1 ||
      !checkValidEmail(email) ||
      password.trim().length < 5 ||
      confirmPassword !== password ||
      confirmPassword.trim().length === 0
    ) {
      if (lastName.trim().length < 1) SetIsValidLastName(false);

      if (firstName.trim().length < 1) SetIsValidFirstName(false);

      if (!checkValidEmail(email)) SetIsValidEmail(false);

      if (password.trim().length < 5) SetIsValidPassword(false);

      if (confirmPassword !== password || confirmPassword.trim().length === 0)
        SetIsValidConfirmPassword(false);
    } else {
      let user = userState;
      user.email = email;
      user.succesfulRegister = false;
      user.lastName = lastName;
      user.firstName = firstName;
      try {
        await registerUser(user, password);
        if (user.succesfulRegister) {
          await addUserToFirestore(user);
          navigation.navigate("Login_Screen");
        }
      } catch (error) {}
    }
  };

  return (
    // <KeyboardAvoidingWrapper>
    <View style={[GlobalStyle.container, { paddingBottom: 86 }]}>
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
        <View style={{ flexDirection: "row", flex: 1, marginTop: 20 }}>
          <UsernameBox
            style={{ marginTop: 0, flex: 5 }}
            onChangeText={onLastNameTextChange}
            title="Last Name"
            placeholder="Enter your last name"
            isValid={isValidLastName}
            errorMessage={lastNameErrorMessage}
            value={lastName}
          />

          <UsernameBox
            style={{ marginTop: 0, flex: 6, marginLeft: 30 }}
            onChangeText={onFirstNameTextChange}
            title="First Name"
            placeholder="Enter your first name"
            isValid={isValidFirstName}
            errorMessage={firstNameErrorMessage}
            value={firstName}
          />
        </View>

        <UsernameBox
          style={{ flex: 1 }}
          onChangeText={onEmailTextChange}
          title="Email"
          placeholder="Enter your email"
          isValid={isValidEmail}
          errorMessage={emailErrorMessage}
          value={email}
        />

        <PasswordBox
          style={{ flex: 1 }}
          title="Password"
          onChangeText={onPasswordTextChange}
          isValid={isValidPassword}
          errorMessage={passwordErrorMessage}
          value={password}
        />
        <PasswordBox
          style={{ flex: 1 }}
          title="Confirm Password"
          onChangeText={onConfirmPasswordTextChange}
          isValid={isValidConfirmPassword}
          errorMessage={confirmPasswordErrorMessage}
          value={confirmPassword}
        />
      </Pressable>
      <View style={[{ flex: 1 }, styles.login_flexbox_container]}>
        <PurpleButton
          viewStyle={{ marginTop: 30 }}
          title="Register"
          onPressFunction={onRegisterPressHandler}
        />
        <AuthenticateFooter
          footerText="Already have an account?"
          optionChose="Login"
          onOptionPressFunction={onGoToLoginHandler}
        />
      </View>
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
