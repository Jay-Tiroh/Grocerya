import Ionicons from "@expo/vector-icons/Ionicons";

import Cart from "@screens/main/CartScreen";
import Favorite from "@screens/main/FavoriteScreen";
import Home from "@screens/main/HomeScreen";
import Profile from "@screens/main/ProfileScreen";

import Avatar from "@components/Avatar";
import { MainTabParamList } from "../types";

export type MainTabScreenConfig = {
  name: keyof MainTabParamList;
  component: React.ComponentType<any>;
  goBack: boolean;
  infoBtn: boolean;
  rightBtn?: React.ComponentType<any>;
  rightBtnAction?: () => void;
};

export const TABS: MainTabScreenConfig[] = [
  {
    name: "Home",
    component: Home,
    goBack: false,
    infoBtn: false,
    rightBtn: Avatar,
  },
  { name: "Cart", component: Cart, goBack: true, infoBtn: false },
  { name: "Favorite", component: Favorite, goBack: true, infoBtn: false },
  { name: "Profile", component: Profile, goBack: true, infoBtn: false },
];

export const TAB_ICONS: Record<
  keyof MainTabParamList,
  React.ComponentProps<typeof Ionicons>["name"]
> = {
  Home: "home",
  Cart: "cart",
  Favorite: "bookmarks",
  Profile: "person",
};

export const TAB_CONFIG = Object.fromEntries(
  TABS.map((tab) => [tab.name, tab]),
) as Record<keyof MainTabParamList, MainTabScreenConfig>;
