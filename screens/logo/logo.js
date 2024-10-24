import React, { useEffect, useState, useRef } from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "./logoStyles";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const images = [
  require("../../assets/images/blackhead.png"),
  require("../../assets/images/nodule.png"),
  require("../../assets/images/papule.png"),
  require("../../assets/images/pustule.png"),
  require("../../assets/images/whitehead.png"),
];

const imageStyles = [
  styles.blackhead,
  styles.nodule,
  styles.pustule,
  styles.papule,
  styles.whitehead,
];

function Logo({ navigation }) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const fadeAnims = images.map(() => useSharedValue(1));

  useEffect(() => {
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoadingComplete(true);
    };

    loadAssets();
  }, []);

  useEffect(() => {
    if (isLoadingComplete) {
      images.forEach((_, index) => {
        setTimeout(() => {
          fadeAnims[index].value = withTiming(0, { duration: 300 });
        }, index * 500);
      });

      setTimeout(() => {
        SplashScreen.hideAsync();
        navigation.replace("Home");
      }, images.length * 500);
    }
  }, [isLoadingComplete, navigation]);

  return (
    <View style={styles.container}>
      {images.map((source, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: fadeAnims[index].value,
          };
        });

        return (
          <Animated.Image
            key={index}
            source={source}
            style={[imageStyles[index], animatedStyle]}
          />
        );
      })}
      <Text style={styles.name}>D.A.C.A</Text>
      <Text style={styles.nameDes}>Detect And Classify Acne</Text>
    </View>
  );
}

export default Logo;
