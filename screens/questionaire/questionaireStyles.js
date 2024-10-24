import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "flex-start",
    backgroundColor: "#f8f8f8", // Màu nền sáng
  },
  form: {
    marginTop: 25,
    paddingHorizontal: 25,
    width: "100%", // Đặt chiều rộng form 100% để dễ căn giữa
    alignSelf: "center",
  },
  descriptionContainer: {
    borderRadius: 10, // Bo góc cho container mô tả
    padding: 20, // Tạo khoảng cách trong hộp
    marginBottom: 20, // Tạo khoảng cách dưới phần mô tả
    marginHorizontal: 20,
  },
  descriptionText: {
    fontFamily: "NettoRegular", // Sử dụng cùng font chữ với nội dung gợi ý
    fontSize: 17.5, // Kích thước chữ tương đối
    color: "#5195ba", // Màu xanh để đồng nhất với các phần khác
    textAlign: "center", // Căn giữa nội dung mô tả
    lineHeight: 19, // Tăng khoảng cách giữa các dòng để dễ đọc hơn
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: "NettoBlack",
    fontSize: 22,
    marginBottom: 8,
    color: "#5195ba", // Màu xanh cho tiêu đề
    textAlign: "center", // Tiêu đề căn giữa
  },
  optionsContainer: {
    flexDirection: "column", // Xếp các nút chọn theo chiều dọc
    alignItems: "center", // Căn giữa các nút
  },
  optionButton: {
    width: "90%", // Chiều rộng của nút chiếm 90% màn hình
    marginVertical: 5, // Tạo khoảng cách giữa các nút theo chiều dọc
    paddingVertical: 15,
    backgroundColor: "#86c8eb", // Màu xanh sáng cho nút
    borderRadius: 5,
    alignItems: "flex-start", // Căn trái cho nội dung bên trong nút
    paddingLeft: 20, // Tạo khoảng cách giữa văn bản và mép trái nút
  },
  selectedOptionButton: {
    backgroundColor: "#5195ba", // Màu xanh đậm khi chọn
  },
  optionText: {
    fontFamily: "NettoBold",
    color: "#ffefe0", // Màu chữ sáng
    textAlign: "left", // Căn trái văn bản trong các ô option
    fontSize: 18,
  },
  submitButton: {
    width: 200,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#ffefe0", // Màu nền nút
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  submitButtonText: {
    fontFamily: "NettoBlack",
    color: "#5195ba", // Màu chữ nút
    fontSize: 25,
  },
  adviceContainer: {
    padding: 16,
    paddingBottom: 5,
    backgroundColor: "#ffefe0", // Nền hộp gợi ý
    borderRadius: 10,
    marginTop: -10,
    marginBottom: 50,
  },
  categoryContain: {
    marginLeft: 5,
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#5195ba", // Màu xanh cho tiêu đề loại mụn
    fontFamily: "NettoBold",
    textAlign: "left",
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 4,
  },
  adviceTitle: {
    color: "#86c8eb", // Màu xanh sáng cho tiêu đề gợi ý
    textAlign: "center",
    fontSize: 25,
    fontFamily: "NettoBlack",
    marginBottom: 8,
  },
  adviceText: {
    color: "#5195ba", // Màu xanh cho nội dung gợi ý
    fontFamily: "NettoRegular",
    textAlign: "left",
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 20,
    marginRight: 10,
  },
  diagnosisContainer: {
    marginBottom: 20,
    backgroundColor: "#ffefe0", // Nền của kết quả chẩn đoán
    padding: 10,
    borderRadius: 5,
  },
  diagnosisTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5195ba", // Màu xanh cho tiêu đề kết quả chẩn đoán
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
