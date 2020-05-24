import React, { useState } from "react";
import { Text, View, Button, Image } from "react-native";
import Header from "../../components/header";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const PatientProfile = () => (
  <>
    <View style={styles.container}>
      <Header />
      <View style={styles.profileContainer}>
        <View style={styles.bio}>
          <Image source={require("../../assets/icons/user.png")} />
          <View style={styles.name}>
            <Text style={styles.boldText}>Firstname Lastname</Text>
            <Text style={styles.subBold}>Male. 32. Married </Text>
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Occupation: Farmer</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Religion: Christian</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Ethnicity: Tiv</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Nationality: Nigerian</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Occupation: Farmer</Text>
          </View>
        </View>
      </View>
    </View>
  </>
);

export default PatientProfile;
