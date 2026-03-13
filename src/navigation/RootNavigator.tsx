import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import { LinkingOptions } from "@react-navigation/native";
import Onboarding from "@screens/OnboardingScreen";
import * as Linking from "expo-linking";
import AuthStack from "./AuthStack";
import DrawerNavigator from "./DrawerNavigator";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/"), "https://grocerya.com"],
  config: {
    screens: {
      Onboarding: "onboarding",

      Auth: {
        screens: {
          Register: "register",
          Verify: "verify",
          Location: "location",
          Notification: "notification",
          Category: "category",
        },
      },

      MainScreens: {
        screens: {
          Main: {
            screens: {
              Home: "home",
              Profile: {
                path: "profile",
                parse: {
                  fullname: (fullname?: string) =>
                    decodeURIComponent(fullname || ""),
                  email: (email?: string) => decodeURIComponent(email || ""),
                },
              },
              Cart: "cart",
              Favorite: "favorite",
            },
          },
        },
      },
    },
  },
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="MainScreens" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
