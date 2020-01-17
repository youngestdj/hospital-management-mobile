import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1fa252",
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  bigText: {
    color: "#333",
    fontSize: 30,
    fontFamily: "raleway-regular"
  },
  boldText: {
    fontSize: 30,
    fontFamily: "raleway-regular",
    color: "#333"
  },
  submit: {
    fontSize: 20,
    fontFamily: "raleway-regular",
    color: "#fff"
  },
  logo: {
    width: 100,
    height: 100
  },
  button: {
    height: 50,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#1fa252",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  formWrapper: {
    marginTop: 10,
    alignSelf: "stretch"
  },
  input: {
    height: 50,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    paddingLeft: 25,
    borderColor: "#ddd",
    borderStyle: "solid",
    borderWidth: 1
  },
  roundedTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  pickerWrapper: {
    borderColor: "#ddd",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    paddingLeft: 15
  },
  picker: {
    height: 50,
    fontSize: 20,
    marginLeft: 0,
    marginRight: 10
  }
});

export default styles;
