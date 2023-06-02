import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IntroStackNavigator from "./IntroStackNavigator";
import AuthenticateStackNavigator from "./AuthenticateStackNavigator";
import TaskStackNavigator from "./TaskStackNavigator";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Intro" component={IntroStackNavigator} />
      <Stack.Screen
        name="Authenticate"
        component={AuthenticateStackNavigator}
      />
      <Stack.Screen name="Task" component={TaskStackNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
