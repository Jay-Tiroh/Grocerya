// app/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/logo.svg";

export default function SplashScreen() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/onboarding");
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // console.log(typeof Logo);
  return (
    <SafeAreaView style={styles.container}>
      <Logo width={200} height={100} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
  },
});
