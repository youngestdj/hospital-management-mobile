import React, { useState } from "react";
import { Text, View, Picker, KeyboardAvoidingView } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { LOGIN } from "../../graphql/mutations";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useMutation } from "@apollo/react-hooks";
import AsyncStorage from "@react-native-community/async-storage";

const Login = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
    user: null,
  });
  const { email, password, user } = credentials;

  const [errors, setErrors] = useState(false);

  const updateInput = (field, text) => {
    setErrors(false);
    setCredentials({ ...credentials, [field]: text });
  };

  const validateLogin = () => {
    const errorMessages = [];

    const emailRules = /\S+@\S+\.\S+/;
    if (!emailRules.test(email)) {
      errorMessages.push("Please enter a valid email");
    }
    if (!password) errorMessages.push("Please enter a password");
    if (!user) errorMessages.push("Please select a user type");

    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      return false;
    }
    return true;
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      setErrors(["Something went wrong."]);
    }
  };

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const loginUser = () => {
    if (validateLogin()) {
      return login({
        variables: {
          user,
          email,
          password,
        },
      })
        .then((data) => {
          const { login } = data.data;
          login.user = user;
          storeData(login);
          return navigation.replace("Drawer");
        })
        .catch((e) => setErrors([e.graphQLErrors[0].message]));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header />
      <View style={styles.loginContainer}>
        <Text style={styles.boldText}>Login</Text>
        <View style={styles.errorContainer}>
          {errors &&
            errors.map((error) => (
              <Text key={error} style={styles.error}>
                {error}
              </Text>
            ))}
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            style={[styles.input, styles.roundedTop]}
            placeholder="Email"
            placeholderTextColor="#b58b99"
            keyboardType="email-address"
            onChangeText={(text) => {
              updateInput("email", text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#b58b99"
            onChangeText={(text) => {
              updateInput("password", text);
            }}
          />
          <View style={styles.pickerWrapper}>
            <Picker
              style={styles.picker}
              selectedValue={credentials.user}
              onValueChange={(itemValue, itemIndex) =>
                updateInput("user", itemValue)
              }
            >
              <Picker.Item label="Select user type" color="#b58b99" />
              <Picker.Item label="Patient" value="Patient" />
              <Picker.Item label="Doctor" value="Doctor" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => loginUser()}>
            <Text style={styles.submit}>
              {loading ? <Text>Loading...</Text> : <Text>Login</Text>}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
