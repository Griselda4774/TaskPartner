import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { LATO_FONTS } from "./src/constants/constants";

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import IntroStackNavigator from './src/navigators/IntroStackNavigator';
import AuthenticateStackNavigator from './src/navigators/AuthenticateStackNavigator';

import CalenderScreen from './src/screens/CalendarScreen';
import ChooseDateDueModal from "./src/components/ChooseDateDueModal";
import SettingsScreen from "./src/screens/SettingsScreen";

const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }
  return (
    // <NavigationContainer>
    //   <MainStack.Navigator screenOptions={{ headerShown: false }}>
    //     <MainStack.Screen name="Intro" component={IntroStackNavigator} />
    //     <MainStack.Screen name="Authenticate" component={AuthenticateStackNavigator}/>
    //   </MainStack.Navigator>
    // </NavigationContainer>

    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider> 
  );
};

export default App;
