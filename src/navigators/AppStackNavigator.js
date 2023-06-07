import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IntroStackNavigator from "./IntroStackNavigator";
import AuthenticateStackNavigator from "./AuthenticateStackNavigator";
import TaskStackNavigator from "./TaskStackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const dispatch = useDispatch();

  // Set up the onAuthStateChanged listener
  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    if (user) {
      // User is signed in
      if (user.emailVerified) {
        dispatch(login());
        console.log("User is signed in");
      }
    } else {
      // User is signed out
      console.log("User is signed out");
      dispatch(logout());
    }
  });

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Intro" component={IntroStackNavigator} />
      <Stack.Screen name="Start_Screen" component={StartScreen} />
      {/* <Stack.Screen
        name="Authenticate"
        component={AuthenticateStackNavigator}
      /> */}
      <Stack.Screen name="Login_Screen" component={LoginScreen} />
      <Stack.Screen name="Register_Screen" component={RegisterScreen} />
      <Stack.Screen name="Task" component={TaskStackNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
