import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthenticateStack = createStackNavigator();

export default function AuthenticateStackNavigator() {
  return (
    <AuthenticateStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <AuthenticateStack.Screen name="Login_Screen" component={LoginScreen} />
      <AuthenticateStack.Screen name="Register_Screen" component={RegisterScreen}/>
    </AuthenticateStack.Navigator>
  );
}
