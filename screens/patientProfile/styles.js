import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#413c69",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#413c69",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "flex-start",
    flex: 1,
    padding: 30,
  },
  bio: {
    borderBottomColor: "#ad62aa",
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  name: {
    marginLeft: 20
  },
  boldText: {
    fontSize: 20,
    fontFamily: "bold-raleway",
    color: "#fff",
    marginBottom: 10,
  },
  subBold: {
    fontSize: 15,
    fontFamily: "raleway-regular",
    color: "#ccc",
  },
  list: {
    marginTop: 50,
    flex:1,
    alignSelf: "stretch"
  },
  listItem: {
    borderBottomColor: "#26233d",
    borderBottomWidth: 2,
  },
  listText: {
    fontSize: 17,
    fontFamily: "raleway-regular",
    color: "#ddd",
    paddingTop: 20,
    paddingBottom: 20
  },
});

export default styles;
