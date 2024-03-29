import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    color: "#fdfcfe",
    fontSize: 16,
    height: 56,
    padding: 16,
    marginRight: 12,
    borderRadius: 5,
  },
  button: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31cf67",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#fdfcfe",
    fontSize: 14,
    textAlign: "center",
  },
});
