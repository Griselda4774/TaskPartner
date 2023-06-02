import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { ScrollView } from "react-native-virtualized-view";
import GlobalStyle from "../components/GlobalStyle";
import OptionNavigatorBar from "../components/OptionNavigatorBar";
import { CameraIcon, FlashIcon, InfoCircleIcon, KeyIcon, LikeIcon, LogOutIcon, MenuIcon, SettingIcon, UserIcon } from "../constants/Icons";

const ProfileScreen = ({navigation}) => {

  const onSettingPressHandler = () => {
    navigation.navigate("Option_Setting_Screen");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 65, }}>
        <Text style={GlobalStyle.screen_header_text}>Profile</Text>
        <Image
          style={styles.avatar}
          source={require("../../assets/avatar.jpg")}
        />
        <Text style={styles.name_text}>Martha Hays</Text>
      </View>
      <ScrollView>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.section_title_text}>Settings</Text>
          <OptionNavigatorBar title="App Settings" icon={SettingIcon} onPressFunction={onSettingPressHandler}/>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.section_title_text}>Account</Text>
          <OptionNavigatorBar title="Change account name" icon={UserIcon} />
          <OptionNavigatorBar title="Change account password" icon={KeyIcon} />
          <OptionNavigatorBar title="Avatar" icon={CameraIcon} />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.section_title_text}>Uptodo</Text>
          <OptionNavigatorBar title="About US" icon={MenuIcon} />
          <OptionNavigatorBar title="FAQ" icon={InfoCircleIcon} />
          <OptionNavigatorBar title="Help and Feedback" icon={FlashIcon} />
          <OptionNavigatorBar title="Support US" icon={LikeIcon} />
        </View>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: 30,
            marginHorizontal: 18,
          }}
        >
          <SvgXml
            xml={LogOutIcon}
            width={24}
            height={24}
            style={{ marginRight: 20 }}
          />
          <Text style={{ color: "#FF4949", fontWeight: 400, fontSize: 16 }}>
            Log out
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110,
    marginTop: 20,
  },

  name_text: {
    marginTop: 20,
    fontWeight: 500,
    fontSize: 26,
    color: "#fff",
  },

  section_title_text: {
    fontWeight: 400,
    fontSize: 14,
    color: "#AFAFAF",
    marginBottom: 10,
  },
});

export default ProfileScreen;
