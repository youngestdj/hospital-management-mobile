import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import Navigator from "./Navigation";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://hospital-management-jessam.herokuapp.com/graphql",
});


const App = () => {
  const [loaded, setLoaded] = useState({ fontLoaded: false });

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "raleway-regular": require("./assets/fonts/Raleway-Regular.ttf"),
        "bold-raleway": require("./assets/fonts/Raleway-Bold.ttf"),
      }).then(() => {
        setLoaded({ fontLoaded: true });
      });
    };
    loadFont();
  }, []);

  if (!loaded.fontLoaded) {
    return <View />;
  }

  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
};

export default App;
