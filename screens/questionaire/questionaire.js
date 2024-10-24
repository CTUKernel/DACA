import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./questionaireStyles";
import QuestionaireOptions from "./questionaireOptions";
import QuestionaireAdvice from "./questionaireAdvice";

const treatmentData = {
  "Mụn đầu đen": [
    "Benzol Peroxide",
    "Salicylic Acid",
    "Retinoids",
    "Azelaic Acid",
  ],
  "Mụn bọc": ["Benzol Peroxide", "Isotretinoin", "Spironolactone", "Cortisone"],
  "Mụn sần": [
    "Benzol Peroxide",
    "Salicylic Acid",
    "Retinoids",
    "Azelaic Acid",
    "Dapsone",
  ],
  "Mụn mủ": [
    "Benzol Peroxide",
    "Salicylic Acid",
    "Retinoids",
    "Azelaic Acid",
    "Corticosteroid",
    "Calamine",
    "Cortisone",
    "Dapsone",
  ],
  "Mụn đầu trắng": [
    "Salicylic Acid",
    "Retinoids",
    "Azelaic Acid",
    "Glycolic Acid",
  ],
};

const categories = Object.keys(QuestionaireOptions);

const Questionnaire = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    categories.reduce((acc, category) => ({ ...acc, [category]: [] }), {})
  );
  const [showAdvice, setShowAdvice] = useState(false);
  const [showTreatmentSuggestions, setShowTreatmentSuggestions] =
    useState(false);
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);
  const [acneCounts, setAcneCounts] = useState({});

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const storedDiagnosis = await AsyncStorage.getItem("responseData");

        if (storedDiagnosis) {
          const parsedDiagnosis = JSON.parse(storedDiagnosis);

          if (parsedDiagnosis?.data?.number_of_acnes) {
            setAcneCounts(parsedDiagnosis.data.number_of_acnes);
          } else {
            Alert.alert("Lỗi", "Chẩn đoán không hợp lệ hoặc thiếu dữ liệu.");
          }
        } else {
          Alert.alert("Không tìm thấy chẩn đoán. Vui lòng thử lại.");
        }
      } catch (error) {
        Alert.alert("Lỗi", "Có lỗi xảy ra khi tải chẩn đoán.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiagnosis();
  }, []);

  const acneTypeMapping = {
    "0_blackhead": "Mụn đầu đen",
    "1_whitehead": "Mụn đầu trắng",
    "2_nodule": "Mụn bọc",
    "3_pustule": "Mụn mủ",
    "4_papule": "Mụn sần",
  };

  const generateTreatmentSuggestions = () => {
    const suggestedTreatments = [];

    Object.keys(acneCounts || {}).forEach((acneKey) => {
      const count = acneCounts[acneKey];
      if (count > 0) {
        const acneType = acneTypeMapping[acneKey];
        const treatments = treatmentData[acneType];
        if (treatments) {
          suggestedTreatments.push({ acneType, treatments });
        } else {
          console.log(`No treatment data found for acne type: ${acneType}`);
        }
      }
    });

    return suggestedTreatments;
  };

  const treatmentSuggestions = generateTreatmentSuggestions();

  const handleOptionPress = (category, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isSelected = prevSelectedOptions[category].includes(option);
      if (isSelected) {
        return {
          ...prevSelectedOptions,
          [category]: prevSelectedOptions[category].filter(
            (item) => item !== option
          ),
        };
      } else {
        return {
          ...prevSelectedOptions,
          [category]: [...prevSelectedOptions[category], option],
        };
      }
    });
  };

  const calculatePercentage = () => {
    const percentages = categories.map((category) => ({
      category,
      percentage:
        (selectedOptions[category].length /
          QuestionaireOptions[category].length) *
        100,
    }));

    const allLessThanFifty = percentages.every((p) => p.percentage < 50);
    const allEqual = percentages.every(
      (p, _, arr) => p.percentage === arr[0].percentage
    );

    if (allLessThanFifty && allEqual) {
      Alert.alert("Thông báo", "Vui lòng chọn thêm phương án!");
      return;
    }

    const maxPercentage = Math.max(...percentages.map((p) => p.percentage));
    const topCategories = percentages
      .filter((p) => p.percentage === maxPercentage)
      .map((p) => p.category);

    const adviceToShow = topCategories.reduce((acc, category) => {
      acc[category] = QuestionaireAdvice[category];
      return acc;
    }, {});

    setAdvice(adviceToShow);
    setShowAdvice(true);
    setShowTreatmentSuggestions(true);
  };

  const renderOptions = (category) => {
    return (
      <View style={styles.optionsContainer}>
        {QuestionaireOptions[category].slice(1).map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOptions[category].includes(option) &&
                styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionPress(category, option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        {/* Description about the quiz */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            "Bài quiz này sẽ giúp bạn hiểu rõ hơn về tình trạng da của mình bằng
            cách cung cấp các gợi ý điều trị phù hợp. Hãy chọn các phương án
            đúng với cách sinh hoạt của bạn để nhận được lời khuyên tốt nhất!"
          </Text>
        </View>

        {categories.map((category, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {QuestionaireOptions[category][0]}
            </Text>
            {renderOptions(category)}
          </View>
        ))}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={calculatePercentage}
        >
          <Text style={styles.submitButtonText}>Hoàn thành</Text>
        </TouchableOpacity>

        {showTreatmentSuggestions && treatmentSuggestions.length > 0 && (
          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Gợi ý các chất điều trị:</Text>
            {treatmentSuggestions.map((suggestion, index) => (
              <View key={index} style={styles.categoryContain}>
                <Text style={styles.categoryTitle}>
                  Đối với {suggestion.acneType}:
                </Text>
                {suggestion.treatments.map((treatment, idx) => (
                  <Text key={idx} style={styles.adviceText}>
                    {"\u2022"} {treatment}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {showAdvice && (
          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>
              Gợi ý điều trị dựa trên lựa chọn của bạn:
            </Text>
            {Object.keys(advice).map((category, index) => (
              <View key={index} style={styles.categoryContain}>
                <Text style={styles.categoryTitle}>
                  Đối với những vấn đề {QuestionaireAdvice[category][0]}:
                </Text>
                {QuestionaireAdvice[category].slice(1).map((item, subIndex) => (
                  <Text key={subIndex} style={styles.adviceText}>
                    {"\u2022"} {item}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Questionnaire;
