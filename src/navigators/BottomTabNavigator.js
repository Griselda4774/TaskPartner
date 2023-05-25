import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import FocuseScreen from "../screens/FocuseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabBar from "../components/BottomTabBar";
import { Image, View } from "react-native";
import {
  GREY_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/Constants";
import HomeIcon from "../../assets/otherIcons/home.svg";
import HomeFocusedIcon from "../../assets/otherIcons/homeFocused.svg";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarStyle: { backgroundColor: GREY_COLOR, height: "10%" },
        tabBarIcon: () => {
          return (
            <View>
              <HomeFocusedIcon width={28} height={28} />
            </View>
          );
        },
        tabBarActiveTintColor: PURPLE_COLOR,
        tabBarInactiveTintColor: WHITE_TEXT_COLOR,
        tabBarLabelStyle: { fontSize: 12 },
      })}
      initialRouteName="Home"
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Calendar" component={CalendarScreen} />
      <BottomTab.Screen name="Focuse" component={FocuseScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
