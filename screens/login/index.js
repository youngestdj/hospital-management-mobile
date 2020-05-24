import React from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.loginContainer}>
          <Text style={styles.boldText}>Login</Text>
          <View style={styles.formWrapper}>
            <TextInput
              style={[styles.input, styles.roundedTop]}
              placeholder="Email"
              placeholderTextColor="#b58b99"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#b58b99"
            />
            <View style={styles.pickerWrapper}>
              <Picker style={styles.picker}>
                <Picker.Item label="Select user type" color="#b58b99" />
                <Picker.Item label="Patient" value="patient" />
                <Picker.Item label="Doctor" value="doctor" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.submit}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Book Appointment")}
        >
          <Text style={styles.submit}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
