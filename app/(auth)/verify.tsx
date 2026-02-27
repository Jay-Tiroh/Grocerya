import OTPInput from "@/components/auth/OTPInput";
import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedAvoidingView from "@/components/general/ThemedAvoidingView";
import ThemedText from "@/components/general/ThemedText";
import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const verify = () => {
  const [flexToggle, setFlexToggle] = useState(false);
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setFlexToggle(false);
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setFlexToggle(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ThemedAvoidingView>
        <Spacer size={40} />
        <View>
          <ThemedText type="title" weight="semiBold" color="primary">
            Enter your OTP number
          </ThemedText>
          <ThemedText customStyles={{ marginTop: 8 }}>
            We’ve sent the OTP number via sms to
          </ThemedText>
          <ThemedText
            color="primary"
            weight="semiBold"
            customStyles={{ fontSize: 14 }}
          >
            +62 888 1234 5678
          </ThemedText>
        </View>
        <View style={{ flex: 1 }}>
          <OTPInput />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Continue" action="category" />
        </View>
        <Spacer size={8} />
        <ThemedText
          type="tiny"
          color="secondary"
          customStyles={{ textAlign: "center" }}
        >
          By clicking, I accept the{" "}
          <ThemedText weight="semiBold" color="primary" type="tiny">
            Terms and Conditions & Privacy Policy
          </ThemedText>
        </ThemedText>
      </ThemedAvoidingView>
    </SafeAreaView>
  );
};

export default verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    height: 54,
  },
});
