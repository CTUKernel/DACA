import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    alignItems: "center",
  },
  OpenLine: {
    width: 250,
    fontFamily: "NettoBlack",
    fontSize: 30,
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  tableContainer: {
    width: 390,
    borderWidth: 5,
    borderColor: "#86c8eb",
    borderRadius: 25,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  headerDate: {
    width: 120,
    textAlign: "center",
    fontFamily: "NettoBlack",
    fontSize: 22,
  },
  headerResult: {
    width: 200,
    textAlign: "center",
    right: 10,
    fontFamily: "NettoBlack",
    fontSize: 22,
  },
  dataDate: {
    width: 140,
    textAlign: "center",
    fontFamily: "NettoRegular",
    fontSize: 20,
  },
  dataResult: {
    width: 200,
    textAlign: "center",
    right: 10,
    fontFamily: "NettoRegular",
    fontSize: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginTop: 10,
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
});

export default styles;
