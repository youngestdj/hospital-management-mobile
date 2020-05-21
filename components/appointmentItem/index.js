import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppointmentItem = () => {
  return (
    <View style={styles.appointmentItem}>
      <View style={styles.dateBg}>
        <Text style={styles.date}>May</Text>
        <Text style={styles.date}>24</Text>
      </View>
      <View>
        <Text style={styles.name}>Firstname Lastname</Text>
        <Text style={styles.description}>
          Some description about the appointment
        </Text>
      </View>
      <View>
        <Text style={styles.time}>9:30 AM</Text>
      </View>
    </View>
  );
};

export default AppointmentItem;
