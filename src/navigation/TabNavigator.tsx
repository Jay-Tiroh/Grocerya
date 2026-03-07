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

import { PlatformPressable } from "@react-navigation/elements";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { TAB_CONFIG, TAB_ICONS, TABS } from "./config/tabs.config";
import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

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
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const config = TAB_CONFIG[route.name];
        const RightBtn = config.rightBtn;
        return {
          header: (props) => (
            <CustomHeader
              goBack={config.goBack}
              infoBtn={config.infoBtn}
              rightBtn={config.rightBtn ? RightBtn : undefined}
              rightBtnAction={
                config.name === "Home" ? openDrawer : config.rightBtnAction
              }
              {...props}
            />
          ),

          tabBarStyle: {
            height: 104,
            justifyContent: "center",
            // paddingVertical: 50,

            paddingHorizontal: 10,
          },

          tabBarIcon: ({ size, focused }) => {
            const color = focused ? colors.primary : colors.accent2;
            const adaptedSize = 20;
            if (route.name === "Cart") {
              return (
                <FontAwesome
                  name="shopping-bag"
                  size={adaptedSize}
                  color={color}
                />
              );
            }

            return (
              <Ionicons
                name={TAB_ICONS[route.name]}
                size={adaptedSize}
                color={color}
              />
            );
          },

          tabBarLabelPosition: "beside-icon",

          tabBarActiveBackgroundColor: colors.grey1,

          tabBarLabel: ({ focused }) => (
            <ThemedText
              weight="medium"
              // type="tiny"
              customStyles={{
                color: colors.primary,
                display: focused ? "flex" : "none",
                lineHeight: 16,
                wordWrap: "nowrap",
                fontSize: 14,
              }}
            >
              {route.name}
            </ThemedText>
          ),

          tabBarButton: (props) => <TabBarButton {...props} />,
        };
      }}
    >
      {TABS.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}
