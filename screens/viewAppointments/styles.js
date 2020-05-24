import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#413c69",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  appointmentItemsContainer: {
    marginTop: 20,
    paddingRight: 20,
  },
  appointmentsContainer: {
    flex: 1,
    backgroundColor: "#413c69",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  boldText: {
    fontSize: 30,
    fontFamily: "bold-raleway",
    color: "#fff",
    marginBottom: 10,
  },
});

export default styles;
