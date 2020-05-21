import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#413c69",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  name: {
    color: "#eee",
    fontSize: 30,
    fontFamily: "bold-raleway",
    marginBottom: 5,
  },
  appointmentContainer: {
    flex: 1,
    backgroundColor: "#413c69",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "flex-start",
    flex: 1,
    padding: 30
  },
  date: {
    color: "#aaa",
    fontSize: 15,
    fontFamily: "raleway-regular",
  },
  paragraph: {
    marginTop: 30
  },
  description: {
    color: "#eee",
    lineHeight: 30,
    fontSize: 20,
    fontFamily: "raleway-regular",
    textAlign: "justify"
  },
  button: {
    height: 50,
    width:200,
    fontSize: 20,
    marginTop: 30,
    backgroundColor: "#ad62aa",
    justifyContent: "center",
    alignItems: "center",

  },
});

export default styles;
