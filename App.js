import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroStackNavigator from './src/navigators/IntroStackNavigator';
import AuthenticateStackNavigator from './src/navigators/AuthenticateStackNavigator';

import StartScreen from './src/screens/StartScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Intro" component={IntroStackNavigator} />
        <MainStack.Screen name="Authenticate" component={AuthenticateStackNavigator}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

