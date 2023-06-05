import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditTaskScreen from "../screens/EditTaskScreen";
import BottomTabNavigator from "../navigators/BottomTabNavigator";
import AuthenticateStackNavigator from "./AuthenticateStackNavigator";
import IntroStackNavigator from "./IntroStackNavigator";

const Stack = createStackNavigator();

const TaskStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="BottomTab"
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} />
    </Stack.Navigator>
  );
};

export default TaskStackNavigator;
