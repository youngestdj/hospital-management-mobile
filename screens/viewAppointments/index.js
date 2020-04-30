import React from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const ViewAppointments = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.appointmentsContainer}>
          <Text style={styles.boldText}>Appointments</Text>
        </View>
      </View>
    </>
  );
};

export default ViewAppointments;
