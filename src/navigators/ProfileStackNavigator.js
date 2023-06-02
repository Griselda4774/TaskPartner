import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <ProfileStack.Screen name="Profile_Screen" component={ProfileScreen} />
      <ProfileStack.Screen name="Option_Setting_Screen" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}
