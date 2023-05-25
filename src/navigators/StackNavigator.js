import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditTaskScreen from "../screens/EditTaskScreen";
import BottomTabNavigator from "../navigators/BottomTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
