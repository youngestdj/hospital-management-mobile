import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Drawer from "react-native-drawer";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const onHamclick = () => {
    setDrawer(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onHamclick}>
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
  );
};

export default Header;
