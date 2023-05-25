import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
