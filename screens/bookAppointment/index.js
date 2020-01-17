import React from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import { SideDrawer } from "../../components/sideDrawer";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const BookAppointment = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.loginContainer}>
          <Text style={styles.boldText}>Book appointment</Text>
          <View style={styles.formWrapper}>
            <TextInput
              style={[styles.input, styles.roundedTop]}
              placeholder="Date"
            />
            <TextInput style={styles.textarea} placeholder="Description" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default BookAppointment;
