import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TaskStackNavigator from "./src/navigators/TaskStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { LATO_FONTS } from "./src/constants/constants";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import IntroStackNavigator from "./src/navigators/IntroStackNavigator";
import AuthenticateStackNavigator from "./src/navigators/AuthenticateStackNavigator";

import CalenderScreen from "./src/screens/CalendarScreen";
import AppStackNavigator from "./src/navigators/AppStackNavigator";

import { Provider } from "react-redux";
import store from "./src/redux/store";

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
    // <CalenderScreen/>

    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
