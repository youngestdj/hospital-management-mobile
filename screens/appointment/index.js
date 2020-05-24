import React, { useState } from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Appointment = ({ navigation }) => (
  <>
    <View style={styles.container}>
      <Header />
      <View style={styles.appointmentContainer}>
        <Text style={styles.name}>Firstname lastname</Text>
        <Text style={styles.date}>May 5, 2020 9AM</Text>
        <View style={styles.paragraph}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("PatientProfile");
            }}
          >
            <Text style={styles.description}>View Px profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </>
);

export default Appointment;
