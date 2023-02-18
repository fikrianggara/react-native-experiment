import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Easing } from "react-native";
import AboutScreen from "./screens/About";
import HomeScreen from "./screens/Home";
import PromoScreen from "./screens/Promo";
import RestaurantScreen from "./screens/Restaurant";

const Stack = createNativeStackNavigator();

const timingConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const options = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  animation: "slide_from_right",
  transitionSpec: {
    open: timingConfig,
    close: timingConfig,
  },
};

const SCREEN = {
  Home: "Home",
  Restaurant: "Restaurant",
  About: "About",
  Promo: "Promo",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN.Home}
          component={HomeScreen}
          options={options}
        />
        <Stack.Screen
          name={SCREEN.Restaurant}
          component={RestaurantScreen}
          options={options}
        ></Stack.Screen>
        <Stack.Screen
          name={SCREEN.About}
          component={AboutScreen}
          options={options}
        />
        <Stack.Screen
          name={SCREEN.Promo}
          component={PromoScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
