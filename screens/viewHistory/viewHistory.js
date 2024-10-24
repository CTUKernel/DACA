import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import LoadHistory from "./loadHistory";
import styles from "./viewHistoryStyles";

const ViewHistory = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem("LoadHistory");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      } else {
        setHistory([["Ngày", "Kết quả chẩn đoán"]]);
      }
    } catch (error) {
      console.log("Không thể tải lịch sử:", error);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const loadedHistory = await LoadHistory.loadHistory();
        setHistory(loadedHistory);
      } catch (error) {
        console.log("Lỗi khi tải lịch sử:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <Text style={styles.OpenLine}>Lịch sử chẩn đoán</Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.headerDate}>Ngày</Text>
          <Text style={styles.headerResult}>Kết quả chẩn đoán</Text>
        </View>
        {history.slice(1).map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.dataDate}>{item[0]}</Text>
            <Text style={styles.dataResult}>{item[1]}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#5195ba" : "#86c8eb" },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Quay về</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#5195ba" : "#86c8eb" },
          ]}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem("LoadHistory");
              await loadHistory();
            } catch (error) {
              console.log("Không thể xóa lịch sử:", error);
            }
          }}
        >
          <Text style={styles.buttonText}>Xóa lịch sử</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ViewHistory;
