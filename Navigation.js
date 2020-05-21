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
  <Drawer.Navigator
    drawerStyle={{ backgroundColor: "#413c69" }}
    drawerContentOptions={{
      activeTintColor: "#fff",
      activeBackgroundColor: "#ad62aa",
      inactiveTintColor: "#fff",
      itemStyle: {
        borderBottomColor: "#2c2947",
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        marginTop: 0,
        marginBottom: 0
      },
    }}
  >
    <Drawer.Screen name="Test" component={TestScreen} />
    <Drawer.Screen name="Book Appointment" component={BookAppointment} />
    <Drawer.Screen name="View Appointments" component={ViewAppointments} />
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
