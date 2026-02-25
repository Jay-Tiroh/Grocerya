/*
|--------------------------------------------------------------------------
| Auth Stack
|--------------------------------------------------------------------------
*/

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
  Profile: undefined;
};

/*
|--------------------------------------------------------------------------
| Root Stack
|--------------------------------------------------------------------------
*/

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined; // ← bottom tabs live here
};
