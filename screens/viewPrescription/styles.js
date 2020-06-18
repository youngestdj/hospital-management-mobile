import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#413c69",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  pContainer: {
    flex: 1,
    backgroundColor: "#413c69",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
  },
  boldText: {
    fontSize: 30,
    fontFamily: "bold-raleway",
    color: "#fff",
  },
  pWrapper: {
    marginTop: 40,
    alignSelf: "stretch",
    flex: 1,
  },
  pText: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 25,
  },
  list: {
    marginTop: 50,
    flex: 1,
    alignSelf: "stretch",
  },
  listItem: {
    borderBottomColor: "#26233d",
    borderBottomWidth: 2,
    alignSelf: "stretch",
  },
  listText: {
    fontSize: 17,
    fontFamily: "raleway-regular",
    color: "#eee",
    paddingTop: 10,
    paddingBottom: 10,
  },
  listTextBold: {
    fontFamily: "bold-raleway",
    color: "#fff",
  },
});

export default styles;
