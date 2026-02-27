import CustomHeader from "@components/general/CustomHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Category from "@screens/auth/CategoryScreen";
import Location from "@screens/auth/LocationScreen";
import Notification from "@screens/auth/NotificationScreen";
import Register from "@screens/auth/RegisterScreen";
import Verify from "@screens/auth/VerifyScreen";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

type AuthScreenConfig = {
  name: keyof AuthStackParamList;
  component: React.ComponentType<any>;
  goBack: boolean;
  infoBtn: boolean;
};

const screens: AuthScreenConfig[] = [
  { name: "Register", component: Register, goBack: false, infoBtn: true },
  { name: "Verify", component: Verify, goBack: true, infoBtn: true },
  { name: "Location", component: Location, goBack: true, infoBtn: true },
  {
    name: "Notification",
    component: Notification,
    goBack: true,
    infoBtn: true,
  },
  { name: "Category", component: Category, goBack: true, infoBtn: true },
];

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        headerStyle: { backgroundColor: "#fff" },
      }}
    >
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            header: (props) => (
              <CustomHeader
                goBack={screen.goBack}
                infoBtn={screen.infoBtn}
                {...props}
              />
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
