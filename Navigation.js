import { createAppContainer, DrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from "./screens/splash";
import TestScreen from "./screens/test";
import Login from "./screens/login";
import BookAppointment from "./screens/bookAppointment";

const AppNavigator = createStackNavigator(
  {
    Test: { screen: TestScreen },
    Home: { screen: SplashScreen },
    Login: { screen: Login },
    BookAppointment: { screen: BookAppointment }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
