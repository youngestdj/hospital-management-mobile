import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appointmentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomColor: "#2c2947",
    borderBottomWidth: 1,
  },
  dateBg: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  date: {
    color: "#413c69",
    fontSize: 20,
    fontFamily: "bold-raleway",
  },
  name: {
    color: "#eee",
    fontSize: 20,
    fontFamily: "bold-raleway",
    marginBottom: 5,
  },
  description: {
    color: "#c6c3d4",
  },
  time: {
    color: "#f296ef",
    marginBottom: 20,
  },
});

export default styles;