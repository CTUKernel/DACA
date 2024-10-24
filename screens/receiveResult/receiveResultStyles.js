import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: 420,
    alignItems: "center",
  },
  OpenLine: {
    width: 250,
    fontFamily: "NettoBlack",
    fontSize: 30,
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
    margin: 45,
  },
  ResultCell: {
    width: 350,
    height: 350,
    borderWidth: 4,
    borderColor: "#86c8eb",
    borderRadius: 25,
    padding: 10,
  },
  resultImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  EndLine: {
    width: 350,
    fontFamily: "NettoBlack",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  DefautAdviceContainer: {
    flex: 1,
    width: 350,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#ffefe0",
    elevation: 12,
    shadowColor: "#5195ba",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    color: "#5195ba",
    fontSize: 20,
    fontFamily: "NettoBold",
  },
  caution: {
    fontSize: 20,
    fontFamily: "NettoBold",
  },
  description: {
    fontSize: 20,
    fontFamily: "NettoRegular",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#86c8eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffefe0",
    fontSize: 20,
    fontFamily: "NettoBlack",
    fontWeight: "bold",
  },
  legendContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 2, // Border width for the square
    borderColor: "#FF6347", // Default border color
  },
  legendLabel: {
    fontSize: 16,
    fontFamily: "NettoBlack",
    color: "#333",
  },
});

export default styles;
