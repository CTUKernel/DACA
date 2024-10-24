import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import { ReceiveResult } from "./screens/receiveResult/receiveResult";
import ViewHistory from "./screens/viewHistory/viewHistory";
import Questionare from "./screens/questionaire/questionaire";
import Logo from "./screens/logo/logo";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FullScreenImage from "./screens/receiveResult/FullScreenImage";
SplashScreen.preventAutoHideAsync();

const loadFonts = () => {
  return Font.loadAsync({
    NettoBlack: require("./assets/font/Netto-Black.ttf"),
    NettoBold: require("./assets/font/Netto-Bold.ttf"),
    NettoRegular: require("./assets/font/Netto-Regular.ttf"),
  });
};

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts();
      } catch (error) {
        console.error(error);
      } finally {
        setFontsLoaded(true);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Splash"
          component={Logo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ReceiveResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={ViewHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="takeQuiz"
          component={Questionare}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullScreenImage"
          component={FullScreenImage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
