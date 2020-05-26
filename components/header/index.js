import React, { useState } from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require("../../assets/icons/ham.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../assets/icons/logo.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </>
  );
};

export default Header;
