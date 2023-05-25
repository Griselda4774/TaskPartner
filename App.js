import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/screens/IntroScreen';
import IntroStackNavigator from './src/navigators/IntroStackNavigator';
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import UsernameBox from './src/components/UsernameBox';
import PasswordBox from './src/components/PasswordBox';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="Intro" component={IntroStackNavigator} />
        <MainStack.Screen name="StartScreen" component={StartScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
    // <UsernameBox>
      
    // </UsernameBox>
    // <PasswordBox></PasswordBox>
  );
}

