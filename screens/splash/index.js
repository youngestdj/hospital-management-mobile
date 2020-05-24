import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { NavigationActions } from "@react-navigation/drawer";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
      /> */}
      <>
        <Text style={styles.bigText}>Hospital</Text>
        <Text style={[styles.bigText, styles.boldText]}>Manager</Text>
      </>
    </View>
  );
};

export default SplashScreen;
