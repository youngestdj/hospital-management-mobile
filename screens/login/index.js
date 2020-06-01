import React, { useState } from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery, useMutation } from "@apollo/react-hooks";
import TestComp from "./test";
import gql from "graphql-tag";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
    user: null,
  });
  // const { email, password, user } = credentials;
  // console.log(credentials.email, credentials.password, credentials.user);
  console.log(credentials);

  const updateInput = (field, text) => {
    setCredentials({ ...credentials, [field]: text });
  };

  const LOGIN = gql`
    mutation Login($email: String!, $password: String!, $user: String!) {
      login(email: $email, password: $password, user: $user) {
        token
      }
    }
  `;
  const [login, { data }] = useMutation(LOGIN);

  // // const { loading, error, data } = useQuery(TEST);
  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error...</Text>;
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
              onChangeText={(text) => {
                updateInput("email", text);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
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
                <Picker.Item label="Patient" value="patient" />
                <Picker.Item label="Doctor" value="doctor" />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                return login({
                  variables: {
                    user: credentials.user,
                    email: credentials.email,
                    password: credentials.password,
                  },
                })
                  .then((data) => console.log(data))
                  .catch((error) => console.log(error));
              }}
            >
              <Text style={styles.submit}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* {data.test.map(({ id, firstname, lastname }) => (
          <TestComp
            key={id}
            id={id}
            lastname={lastname}
            firstname={firstname}
          />
        ))} */}
      </View>
    </>
  );
};

export default Login;
