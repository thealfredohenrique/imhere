import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: "#fdfcfe",
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e23c44",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
});
