// styles.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Tính toán kích thước phần trăm
const buttonWidth = width * 0.5; // 50% chiều rộng màn hình
const buttonHeight = height * 0.1; // 10% chiều cao màn hình

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  container1: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: "NettoBlack",
    fontSize: 30,
  },
  description: {
    fontSize: 18,
    fontFamily: "NettoRegular",
    color: "gray",
    marginTop: 10,
  },
  container2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 180,
    borderRadius: 40, // Bo tròn khung
    borderWidth: 3,
    borderColor: "#86C8EC", // Màu đường viền
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#f9f9f9", // Màu nền của khung
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 10, // Bo tròn hình nhỏ
  },
  imagePlaceholderText: {
    fontSize: 18,
    fontFamily: "NettoRegular",
    color: "gray",
    textAlign: "center",
    marginBottom: 5,
  },
  captureButton: {
    backgroundColor: "#FFEFE0", // Màu nền nút chụp hình
    width: 300,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12, // Điều chỉnh khoảng cách dưới nút chọn ảnh
    marginBottom: 10,
    flexDirection: "row", // Đặt các phần tử theo hàng ngang
    alignItems: "center",
  },
  captureButtonText: {
    color: "#5295BA", // Màu chữ của nút chụp hình
    fontSize: 18,
    fontFamily: "NettoBold",
    marginLeft: 10, // Khoảng cách giữa hình ảnh và chữ
  },
  captureButtonIcon: {
    width: 20,
    height: 20,
  },
  container3: {
    flex: 1,
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#5295BA", // Màu nền nút
    borderRadius: 25, // Góc bo tròn
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    color: "#ffffff", // Màu chữ của nút nkq
    fontSize: 18,
    fontFamily: "NettoBold",
  },
  button1: {
    backgroundColor: "#ffffff", // Màu nền nút
    borderRadius: 25, // Góc bo tròn
    borderColor: "#5295BA",
    borderWidth: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText1: {
    color: "#5295BA", // Màu chữ của nút ls
    fontSize: 18,
    fontFamily: "NettoBold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    width: "80%",
  },
  separatorLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: "gray",
  },
  separatorText: {
    fontSize: 16,
    fontFamily: "NettoRegular",
    color: "gray",
    marginHorizontal: 10,
  },
  imageWrapper: {
    position: "relative",
  },
  removeButton: {
    position: "absolute",
    top: -5, // Điều chỉnh khoảng cách từ trên cùng của ảnh
    right: -5, // Điều chỉnh khoảng cách từ bên phải của ảnh
    backgroundColor: "white",
    borderRadius: 20, // Bo tròn hơn
    borderWidth: 0.1,
    width: 30, // Kích thước của nút
    height: 30, // Kích thước của nút
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  removeButtonIcon: {
    width: 20,
    height: 20,
  },
  imagePlaceholderWrapper: {
    alignItems: "center",
  },
});

export default styles;