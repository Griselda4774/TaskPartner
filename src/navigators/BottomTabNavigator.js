import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import FocuseScreen from "../screens/FocuseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { TouchableOpacity } from "react-native";
import {
  GREY_BACKGROUND_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { SvgXml } from "react-native-svg";
import {
  HomeBarIcon,
  HomeBarFocusedIcon,
  AddIcon,
  UserIcon,
  UserFocusedIcon,
  CalendarIcon,
  CalendarFocusedIcon,
  ClockIcon,
  ClockFocusedIcon,
} from "../constants/Icons";
import EmptyScreen from "../screens/EmptyScreen";
import AddTaskModal from "../components/AddTaskModal";
import { View } from "react-native";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [enableAddTask, setEnableAddTask] = useState(false);

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarStyle: {
          backgroundColor: GREY_BACKGROUND_COLOR,
          height: 88,
          borderTopWidth: 0,
          paddingLeft: 8,
          paddingRight: 8,
        },
        tabBarActiveTintColor: PURPLE_COLOR,
        tabBarInactiveTintColor: WHITE_TEXT_COLOR,
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Lato-Regular" },
      })}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={HomeBarFocusedIcon} height={28} width={28} />
            ) : (
              <SvgXml xml={HomeBarIcon} height={28} width={28} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={CalendarFocusedIcon} height={28} width={28} />
            ) : (
              <SvgXml xml={CalendarIcon} height={28} width={28} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Empty"
        component={EmptyScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
          },
        })}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 68,
                    height: 68,
                    borderRadius: 50,
                    backgroundColor: PURPLE_COLOR,
                    marginTop: -64,
                  }}
                  activeOpacity={0.5}
                  onPress={() => {
                    setEnableAddTask(true);
                  }}
                >
                  <SvgXml xml={AddIcon} height={36} width={36} />
                </TouchableOpacity>

                <AddTaskModal
                  visible={enableAddTask}
                  onRequestClose={() => {
                    setEnableAddTask(false);
                  }}
                />
              </View>
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Focuse"
        component={FocuseScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={ClockFocusedIcon} height={28} width={28} />
            ) : (
              <SvgXml xml={ClockIcon} height={28} width={28} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgXml xml={UserFocusedIcon} height={28} width={28} />
            ) : (
              <SvgXml xml={UserIcon} height={28} width={28} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
