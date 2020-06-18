import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/splash";
import Login from "./screens/login";
import BookAppointment from "./screens/bookAppointment";
import ViewAppointments from "./screens/viewAppointments";
import ViewPrescription from "./screens/viewPrescription";
import { createStackNavigator } from "@react-navigation/stack";
import Appointment from "./screens/appointment";
import PatientProfile from "./screens/patientProfile";
import { getUser } from "./helpers";

const { user } = getUser();

const Stack = createStackNavigator();
const MainNavigator = () => (
  <Stack.Navigator initialRouteName="View Appointments" headerMode="none">
    <Drawer.Screen name="View Appointments" component={ViewAppointments} />
    <Stack.Screen name="Appointment" component={Appointment} />
    <Stack.Screen name="PatientProfile" component={PatientProfile} />
  </Stack.Navigator>
);
const Stack2 = createStackNavigator();
const SubNavigator = () => (
  <NavigationContainer>
    <Stack2.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack2.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack2.Navigator>
  </NavigationContainer>
);

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
        marginBottom: 0,
      },
    }}
  >
    {user === "doctor" ? (
      <Drawer.Screen name="View Appointments" component={MainNavigator} />
    ) : (
      <>
        <Drawer.Screen name="Book Appointment" component={BookAppointment} />
        <Drawer.Screen name="View Prescription" component={ViewPrescription} />
      </>
    )}
  </Drawer.Navigator>
);

export default SubNavigator;
