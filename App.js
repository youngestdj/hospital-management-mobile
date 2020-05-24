import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import Navigator from "./Navigation";

const App = () => {
  const [loaded, setLoaded] = useState({ fontLoaded: false });

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
        "bold-raleway": require("./assets/fonts/Raleway-Bold.ttf")
      }).then(() => {
        setLoaded({ fontLoaded: true });
      });
    };
    loadFont();
  }, []);

  
  if (!loaded.fontLoaded) {
    return <View />;
  }

  return <Navigator />;
};

export default App;
