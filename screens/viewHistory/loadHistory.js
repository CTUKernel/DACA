import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const acneTypeMapping = {
  "0_blackhead": "Mụn đầu đen",
  "1_whitehead": "Mụn đầu trắng",
  "2_nodule": "Mụn bọc",
  "3_pustule": "Mụn sần",
  "4_papule": "Mụn mủ",
};

const LoadHistory = {
  saveResultToHistory: async (response) => {
    const date = moment().format("DD-MM-YYYY HH:mm");
    let result = "Da khỏe, không có mụn";
    const data = response.data;
    const numberOfAcnes = data.number_of_acnes;

    if (numberOfAcnes) {
      const detectedAcnes = Object.keys(numberOfAcnes)
        .filter((key) => numberOfAcnes[key] > 0)
        .map((key) => acneTypeMapping[key] || key)
        .join(", ");

      if (detectedAcnes.length > 0) {
        result = detectedAcnes;
      }
    }

    const newEntry = [date, result];

    try {
      // Retrieve existing history from AsyncStorage
      const history = await AsyncStorage.getItem("LoadHistory");
      const LoadHistory = history
        ? JSON.parse(history)
        : [["Ngày", "Kết quả chẩn đoán"]]; // Initialize with headers

      // Add the new entry
      LoadHistory.push(newEntry);

      // Limit to the latest 20 entries + headers
      if (LoadHistory.length > 21) {
        LoadHistory.splice(1, LoadHistory.length - 21);
      }

      // Save updated history back to AsyncStorage
      await AsyncStorage.setItem("LoadHistory", JSON.stringify(LoadHistory));
    } catch (error) {
      console.log("Không thể hiển thị lịch sử chẩn đoán:", error);
    }
  },

  loadHistory: async () => {
    try {
      const history = await AsyncStorage.getItem("LoadHistory");
      if (history) {
        return JSON.parse(history);
      }
      return [["Ngày", "Kết quả chẩn đoán"]];
    } catch (error) {
      console.log("Không thể hiển thị lịch sử chẩn đoán:", error);
      return [["Ngày", "Kết quả chẩn đoán"]];
    }
  },
};

export default LoadHistory;
