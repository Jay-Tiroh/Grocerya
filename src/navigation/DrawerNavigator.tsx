import Avatar from "@components/Avatar";
import Spacer from "@components/general/Spacer";
import { colors } from "@constants/style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationState } from "@react-navigation/native";
import React from "react";
import { TAB_ICONS as icons, TABS } from "./config/tabs.config";
import TabNavigator from "./TabNavigator";
import { DrawerParamList } from "./types";

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const focusedBgColor = "rgba(33, 150, 243, 0.12)";
  const focusedTintColor = "#2196f3";
  const inactiveBgColor = "transparent";

  // ✅ get active tab route
  const drawerRoute = props.state.routes.find((route) => route.name === "Main");

  const nestedState = drawerRoute?.state as NavigationState | undefined;

  const activeTab = nestedState?.routes[nestedState.index]?.name ?? "Home";

  return (
    <DrawerContentScrollView {...props}>
      <Avatar
        size={80}
        rounded
        title="Chizuru_Jethro"
        subtitle="Mobile Developer"
      />

      <Spacer size={20} />

      {TABS.map((tab) => {
        const focused = activeTab === tab.name;

        return (
          <DrawerItem
            key={tab.name}
            label={tab.name}
            focused={focused}
            inactiveTintColor={colors.secondary}
            inactiveBackgroundColor={inactiveBgColor}
            activeTintColor={focusedTintColor}
            activeBackgroundColor={focusedBgColor}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate("Main", {
                screen: tab.name,
              });
            }}
            icon={({ size }) => {
              const color = focused ? focusedTintColor : colors.secondary;

              if (tab.name === "Cart") {
                return (
                  <FontAwesome name="shopping-bag" size={size} color={color} />
                );
              }

              return (
                <Ionicons name={icons[tab.name]} size={size} color={color} />
              );
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        swipeEnabled: true,
        swipeEdgeWidth: 80,
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{
          drawerLabel: "Home",
        }}
      />
    </Drawer.Navigator>
  );
}
