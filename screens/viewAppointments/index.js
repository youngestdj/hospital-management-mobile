import React from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import AppointmentItem from "../../components/appointmentItem";
import styles from "./styles";
import { TextInput, TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const ViewAppointments = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.appointmentsContainer}>
          <Text style={styles.boldText}>Appointments (10)</Text>
          <ScrollView contentContainerStyle={styles.appointmentItemsContainer}>
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
            <AppointmentItem />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ViewAppointments;
