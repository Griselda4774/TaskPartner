import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen1 from "../screens/OnBoardingScreen1";
import OnBoardingScreen2 from "../screens/OnBoardingScreen2";
import OnBoardingScreen3 from "../screens/OnBoardingScreen3";
import StartScreen from "../screens/StartScreen";

const IntroStack = createStackNavigator();

export default function IntroStackNavigator() {
  return (
    <IntroStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <IntroStack.Screen
        name="OnBoardingScreen_1"
        component={OnBoardingScreen1}
      />
      <IntroStack.Screen
        name="OnBoardingScreen_2"
        component={OnBoardingScreen2}
      />
      <IntroStack.Screen
        name="OnBoardingScreen_3"
        component={OnBoardingScreen3}
      />
      <IntroStack.Screen name="Start_Screen" component={StartScreen} />
    </IntroStack.Navigator>
  );
}
