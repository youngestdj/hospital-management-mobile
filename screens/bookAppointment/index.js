import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { BOOK_APPOINTMENT } from "../../graphql/mutations";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";

const BookAppointment = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [dateSelected, setDateSelected] = useState({
    date: false,
    time: false,
  });
  const [details, setDetails] = useState({
    description: null,
    errors: null,
    success: null,
  });
  console.log(details);

  const showDatePicker = (type) => {
    setShow(true);
    setMode(type);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateSelected({ ...dateSelected, [mode]: currentDate });
    setDetails({ ...details, errors: null, success: null });
  };

  const validateInput = () => {
    const errorMessages = [];
    if (!dateSelected.date) errorMessages.push("Please select a date");
    if (!dateSelected.time) errorMessages.push("Please select a time");
    if (!details.description)
      errorMessages.push("Please enter what your appointment is about");
    if (errorMessages.length > 0) {
      setDetails({ ...details, errors: errorMessages });
      return false;
    }
    return true;
  };

  const [bookAppointment, { data, loading, error }] = useMutation(
    BOOK_APPOINTMENT
  );

  const showSuccess = (message) => {
    setDetails({ ...details, success: message, description: null });
    setDateSelected({ ...dateSelected, date: false, time: false });
  };

  const submitAppointment = () => {
    if (validateInput()) {
      return bookAppointment({
        variables: {
          date: `${moment(dateSelected.date).format("DD-MM-YYYY")} ${moment(
            dateSelected.time
          ).format("HH:mm a")}`,
          description: details.description,
        },
      })
        .then((data) => {
          return showSuccess("Appointment booked successfully!");
        })
        .catch((e) => console.log(e.graphQLErrors[0].message));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Header />
      <View style={styles.loginContainer}>
        <Text style={styles.boldText}>Book appointment</Text>
        <View style={styles.errorContainer}>
          {details.errors &&
            details.errors.map((item) => (
              <Text key={item} style={styles.error}>
                {item}
              </Text>
            ))}
        </View>
        <View style={styles.errorContainer}>
          {details.success && (
            <Text style={styles.success}>{details.success}</Text>
          )}
        </View>
        <View style={styles.formWrapper}>
          <TouchableOpacity
            style={[styles.input, styles.roundedTop]}
            onPress={() => showDatePicker("date")}
          >
            <Text style={styles.date}>
              {dateSelected.date
                ? moment(dateSelected.date).format("DD-MM-YYYY")
                : "Select date"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.input}
            onPress={() => showDatePicker("time")}
          >
            <Text style={styles.date}>
              {dateSelected.time
                ? moment(dateSelected.time).format("HH:mm a")
                : "Select time"}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.description}
            placeholder="Description"
            placeholderTextColor="#b58b99"
            numberOfLines={10}
            multiline={true}
            value={details.description}
            onChangeText={(text) => {
              return setDetails({
                ...details,
                errors: null,
                success: null,
                description: text,
              });
            }}
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => submitAppointment()}
          >
            <Text style={styles.submit}>
              {loading ? <Text>Loading...</Text> : <Text>Submit</Text>}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BookAppointment;
