import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import Navigator from "./Navigation";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { concat } from "apollo-link";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
import AsyncStorage from "@react-native-community/async-storage";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "https://hospital-management-jessam.herokuapp.com/graphql",
});

const authMiddleware = setContext(async (req, { headers }) => {
  let user = await AsyncStorage.getItem('user');
  user = JSON.parse(user);

  return {
    headers: {
      Authorization: user.token
    }
  }
})

const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
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
