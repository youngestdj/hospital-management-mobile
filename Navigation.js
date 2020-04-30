import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/splash";
import TestScreen from "./screens/test";
import Login from "./screens/login";
import BookAppointment from "./screens/bookAppointment";
import ViewAppointments from "./screens/viewAppointments";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Test" component={TestScreen} />
    <Drawer.Screen name="BookAppointment" component={BookAppointment} />
    <Drawer.Screen name="ViewAppointments" component={ViewAppointments} />
  </Drawer.Navigator>
);

const Stack = createStackNavigator();
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
