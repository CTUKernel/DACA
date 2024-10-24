import React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";

export default function FullScreenImage({ route, navigation }) {
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
        {/* Custom back button */}
      </Pressable>
      <Image source={{ uri: imageUrl }} style={styles.fullImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButtonText: {
    color: "white",
    fontSize: 18,
  },
});
