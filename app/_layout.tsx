import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// 1. Keep the splash screen visible immediately
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // 2. Define the hide function
    const prepare = async () => {
      try {
        // 3. Wait for 3 seconds (3000ms)
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        // 4. HIDE the splash screen
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
