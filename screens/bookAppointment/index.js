import React, { useState } from "react";
import { Text, View, Picker, Button } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

const BookAppointment = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [dateSelected, setDateSelected] = useState({
    date: false,
    time: false,
  });

  const showDatePicker = (type) => {
    setShow(true);
    setMode(type);
  };

  const onChange = (event, selectedDate, type) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "andriod");
    setDate(currentDate);
    setDateSelected({ ...dateSelected, [mode]: currentDate });
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.loginContainer}>
          <Text style={styles.boldText}>Book appointment</Text>
          <View style={styles.formWrapper}>
            <TouchableOpacity
              style={[styles.input, styles.roundedTop]}
              onPress={() => showDatePicker("date")}
            >
              <Text style={styles.date}>
                {dateSelected.date ? dateSelected.date.toDateString() : "Select date"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.input}
              onPress={() => showDatePicker("time")}
            >
              <Text style={styles.date}>
                {dateSelected.time ? dateSelected.time.toTimeString() : "Select time"}
              </Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textarea}
              placeholder="Description"
              placeholderTextColor="#b58b99"
            />
            {show && (
              <DateTimePicker
                value={date}
                mode={mode}
                timeZoneOffsetInMinutes={0}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

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
