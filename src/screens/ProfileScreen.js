import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { ScrollView } from "react-native-virtualized-view";
import GlobalStyle from "../components/GlobalStyle";
import OptionNavigatorBar from "../components/OptionNavigatorBar";
import {
  CameraIcon,
  FlashIcon,
  InfoCircleIcon,
  KeyIcon,
  LikeIcon,
  LogOutIcon,
  MenuIcon,
  SettingIcon,
  UserIcon,
} from "../constants/Icons";
import { useSelector, useDispatch } from "react-redux";
import {
  GREY_TEXT_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { logoutUser } from "../firebase/user";
import { resetTasks } from "../redux/actions";

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const onSettingPressHandler = () => {
    navigation.navigate("Option_Setting_Screen");
  };

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.screen_header_text, {textAlign: "center", marginTop: 50}]}>Profile</Text>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 15, }}>
          {user.isLogin ? (
            <View style={{alignItems: "center",}}>
              <View style={styles.avatar}>
                <Text style={styles.avatar_text}>{user.lastName[0]}</Text>
              </View>
              <Text
                style={styles.name_text}
              >{`${user.lastName} ${user.firstName}`}</Text>
            </View>
          ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.button_wrapper}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.replace("Authenticate");
                  }}
                >
                  <Text style={styles.button_text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Register_Screen");
                  }}
                >
                  <Text style={styles.button_text}>Register</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    color: GREY_TEXT_COLOR,
                    fontSize: 14,
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Please login or register to see more.
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.section_title_text}>Settings</Text>
          <OptionNavigatorBar
            title="App Settings"
            icon={SettingIcon}
            onPressFunction={onSettingPressHandler}
          />
        </View>

        {user.isLogin ? (
          <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            <Text style={styles.section_title_text}>Account</Text>
            <OptionNavigatorBar title="Change account name" icon={UserIcon} />
            <OptionNavigatorBar
              title="Change account password"
              icon={KeyIcon}
            />
            <OptionNavigatorBar title="Avatar" icon={CameraIcon} />
          </View>
        ) : null}

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.section_title_text}>Uptodo</Text>
          <OptionNavigatorBar title="About US" icon={MenuIcon} />
          <OptionNavigatorBar title="FAQ" icon={InfoCircleIcon} />
          <OptionNavigatorBar title="Help and Feedback" icon={FlashIcon} />
          <OptionNavigatorBar title="Support US" icon={LikeIcon} />
        </View>

        {user.isLogin ? (
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
              marginHorizontal: 18,
            }}
            onPress={() => {
              logoutUser();
              dispatch(resetTasks());
              navigation.replace("Start_Screen");
            }}
          >
            <SvgXml
              xml={LogOutIcon}
              width={28}
              height={28}
              style={{ marginRight: 20 }}
            />
            <Text style={{ color: "#FF4949", fontWeight: 400, fontSize: 16 }}>
              Log out
            </Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingBottom: 20,
  },

  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PURPLE_COLOR,
  },
  avatar_text: { color: WHITE_TEXT_COLOR, fontSize: 50, textAlign: "center" },

  name_text: {
    marginTop: 20,
    fontWeight: 500,
    fontSize: 26,
    color: "#fff",
    fontFamily: "Lato-Regular",
  },

  section_title_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#AFAFAF",
    marginBottom: 10,
    fontFamily: "Lato-Regular",
  },

  button_wrapper: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-evenly",
    width: 280,
  },
  button: {
    backgroundColor: PURPLE_COLOR,
    width: 120,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 16,
    fontFamily: "Lato-Regular",
  },
});

export default ProfileScreen;
