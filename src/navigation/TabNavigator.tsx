import React from "react";

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import CustomHeader from "@components/general/CustomHeader";
import ThemedText from "@components/general/ThemedText";
import { colors } from "@constants/style";

import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

import Cart from "@screens/main/CartScreen";
import Favorite from "@screens/main/FavoriteScreen";
import Home from "@screens/main/HomeScreen";
import Profile from "@screens/main/ProfileScreen";

import { PlatformPressable } from "@react-navigation/elements";
import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

type MainTabScreenConfig = {
  name: keyof MainTabParamList;
  component: React.ComponentType<any>;
  goBack: boolean;
  infoBtn: boolean;
};

const Tabs: MainTabScreenConfig[] = [
  { name: "Home", component: Home, goBack: false, infoBtn: false },
  { name: "Cart", component: Cart, goBack: true, infoBtn: false },
  { name: "Favorite", component: Favorite, goBack: true, infoBtn: false },
  { name: "Profile", component: Profile, goBack: true, infoBtn: false },
];

const tabConfig = Object.fromEntries(
  Tabs.map((tab) => [tab.name, tab]),
) as Record<keyof MainTabParamList, MainTabScreenConfig>;

const icons: Record<
  keyof MainTabParamList,
  React.ComponentProps<typeof Ionicons>["name"]
> = {
  Home: "home",
  Cart: "cart",
  Favorite: "bookmarks",
  Profile: "person",
};

function TabBarButton(props: BottomTabBarButtonProps) {
  const { delayLongPress, style, ...rest } = props;

  return (
    <PlatformPressable
      {...rest}
      delayLongPress={delayLongPress ?? undefined}
      style={[
        style,
        {
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 8,
          flex: 0,
          width: "auto",
          height: 60,
          marginTop: 10,
          gap: 5,
        },
      ]}
    />
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const config = tabConfig[route.name];

        return {
          header: (props) => (
            <CustomHeader
              goBack={config.goBack}
              infoBtn={config.infoBtn}
              {...props}
            />
          ),

          tabBarStyle: {
            height: 104,
            justifyContent: "center",
            // paddingVertical: 50,
            paddingHorizontal: 20,
          },

          tabBarIcon: ({ size, focused }) => {
            const color = focused ? colors.primary : colors.accent2;

            if (route.name === "Cart") {
              return (
                <FontAwesome name="shopping-bag" size={size} color={color} />
              );
            }

            return (
              <Ionicons name={icons[route.name]} size={size} color={color} />
            );
          },

          tabBarLabelPosition: "beside-icon",

          tabBarActiveBackgroundColor: colors.grey1,

          tabBarLabel: ({ focused }) => (
            <ThemedText
              weight="medium"
              customStyles={{
                color: focused ? colors.primary : colors.accent2,
                display: focused ? "flex" : "none",
                lineHeight: 16,
                wordWrap: "nowrap",
              }}
            >
              {route.name}
            </ThemedText>
          ),

          tabBarButton: (props) => <TabBarButton {...props} />,
        };
      }}
    >
      {Tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}
