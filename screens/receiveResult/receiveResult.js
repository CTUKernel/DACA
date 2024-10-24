import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Pressable, ScrollView, Image } from "react-native";
import styles from "./receiveResultStyles";

// Full legend list with keys matching backend response
const legendItems = {
  "0_blackhead": { color: "rgb(255,0,0)", label: "Mụn đầu đen" }, // Red
  "1_whitehead": { color: "rgb(0,255,0)", label: "Mụn đầu trắng" }, // Green
  "2_nodule": { color: "rgb(0,0,255)", label: "Mụn bọc" }, // Blue
  "3_pustule": { color: "rgb(255,255,0)", label: "Mụn mủ" }, // Yellow
  "4_papule": { color: "rgb(0,255,255)", label: "Mụn sần" }, // Cyan
};

// Function to process the response and determine what to display
export async function processResponse() {
  try {
    const responseData = await AsyncStorage.getItem("responseData");
    if (responseData) {
      const parsedData = JSON.parse(responseData);

      // Check if acne is detected or not
      if (parsedData?.data?.message === "No acne detected.") {
        return { message: "No acne detected", imageUrl: null, acneTypes: {} };
      }

      // Otherwise, check for an image URL and number of acne types
      if (
        parsedData?.data?.detected_image_url &&
        parsedData?.data?.number_of_acnes
      ) {
        return {
          imageUrl: parsedData.data.detected_image_url,
          message: null,
          acneTypes: parsedData.data.number_of_acnes || {}, // Ensure acneTypes is always an object
        };
      }
    }
    console.log("No image URL or message found in storage");
    return { acneTypes: {} }; // Return an empty object if no data is found
  } catch (error) {
    console.error("Error fetching data from AsyncStorage:", error);
    return { acneTypes: {} }; // Handle error and return empty object
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

  // Ensure resultData.acneTypes is a valid object
  const detectedAcneTypes = resultData.acneTypes
    ? Object.keys(resultData.acneTypes).filter(
        (key) => resultData.acneTypes[key] > 0
      )
    : [];

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
          {detectedAcneTypes.map((acneTypeKey, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[
                  styles.legendColorBox,
                  { borderColor: legendItems[acneTypeKey].color }, // Apply border color dynamically
                ]}
              />
              <Text style={styles.legendLabel}>
                {legendItems[acneTypeKey].label}
              </Text>
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
