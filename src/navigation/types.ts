/*
|--------------------------------------------------------------------------
| Auth Stack
|--------------------------------------------------------------------------
*/
import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Register: undefined;
  Verify: undefined;
  Location: undefined;
  Notification: undefined;
  Category: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: { fullname?: string; email?: string };
};

export type DrawerParamList = {
  Main: NavigatorScreenParams<MainTabParamList>; // bottom tabs nested here
};
/*
|--------------------------------------------------------------------------
| Root Stack
|--------------------------------------------------------------------------
*/

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>; // ← nested navigator
  MainScreens: NavigatorScreenParams<DrawerParamList>; // ← nested navigator
};
