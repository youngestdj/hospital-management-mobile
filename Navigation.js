import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/splash";
import Login from "./screens/login";
import BookAppointment from "./screens/bookAppointment";
import ViewAppointments from "./screens/viewAppointments";
import { createStackNavigator } from "@react-navigation/stack";
import Appointment from "./screens/appointment";
import PatientProfile from "./screens/patientProfile";

const Stack = createStackNavigator();
const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={SplashScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Appointment" component={Appointment} />
    <Stack.Screen name="PatientProfile" component={PatientProfile} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <NavigationContainer>
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
          marginBottom: 0,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MainNavigator} />
      <Drawer.Screen name="Book Appointment" component={BookAppointment} />
      <Drawer.Screen name="View Appointments" component={ViewAppointments} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default DrawerNavigator;
