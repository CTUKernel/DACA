import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Pressable, ScrollView, Image } from "react-native";
import styles from "./receiveResultStyles";

const legendItems = [
  { color: "rgb(255,0,0)", label: "Mụn đầu đen" }, // Red
  { color: "rgb(0,255,0)", label: "Mụn đầu trắng" }, // Green
  { color: "rgb(0,0,255)", label: "Mụn bọc" }, // Blue
  { color: "rgb(255,255,0)", label: "Mụn mủ" }, // Yellow
  { color: "rgb(0,255,255)", label: "Mụn sần" }, // Cyan
];

// Function to process the response and determine what to display
export async function processResponse() {
  try {
    const responseData = await AsyncStorage.getItem("responseData");
    if (responseData) {
      const parsedData = JSON.parse(responseData);

      // Check if acne is detected or not
      if (parsedData?.data?.message === "No acne detected.") {
        return { message: "No acne detected", imageUrl: null };
      }

      // Otherwise, check for an image URL
      if (parsedData?.data?.detected_image_url) {
        return { imageUrl: parsedData.data.detected_image_url, message: null };
      }
    }
    console.log("No image URL or message found in storage");
    return null;
  } catch (error) {
    console.error("Error fetching data from AsyncStorage:", error);
    return null;
  }
}

export function ReceiveResult({ navigation }) {
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const getImageUrl = async () => {
      const data = await processResponse();
      setResultData(data);
    };
    getImageUrl();
  }, []);

  const handlePressResult = () => {
    if (resultData?.imageUrl) {
      navigation.navigate("FullScreenImage", { imageUrl: resultData.imageUrl });
    }
  };

  if (!resultData) {
    return (
      <View style={styles.Container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Case 1: No acne detected, show congratulations message
  if (resultData.message === "No acne detected") {
    return (
      <View style={styles.Container}>
        <Text style={styles.OpenLine}>Chúc mừng, bạn có một làn da khỏe!</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#5195ba" : "#86c8eb" },
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Quay lại</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // Case 2: Acne detected, show result image and legend
  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.OpenLine}>Đây là kết quả chẩn đoán của bạn</Text>

        {/* Pressable Result Cell */}
        <Pressable onPress={handlePressResult}>
          <View style={styles.ResultCell}>
            {resultData.imageUrl ? (
              <Image
                source={{ uri: resultData.imageUrl }}
                style={styles.resultImage}
              />
            ) : (
              <Text>No image available</Text>
            )}
          </View>
        </Pressable>

        {/* Legend section */}
        <View style={styles.legendContainer}>
          {legendItems.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[
                  styles.legendColorBox,
                  { borderColor: item.color }, // Apply border color dynamically
                ]}
              />
              <Text style={styles.legendLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.EndLine}>
          Bạn có thể làm một bài quiz để nhận một số gợi ý điều trị!
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#5195ba" : "#86c8eb" },
            ]}
            onPress={() => navigation.navigate("takeQuiz")}
          >
            <Text style={styles.buttonText}>Làm Quiz</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}