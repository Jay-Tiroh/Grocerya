import PhoneInput from "@components/auth/PhoneInput";
import Button from "@components/general/Button";
import Spacer from "@components/general/Spacer";
import ThemedAvoidingView from "@components/general/ThemedAvoidingView";
import ThemedText from "@components/general/ThemedText";
import { useAuthNavigation } from "@navigation/useAuthNavigation";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const { toVerify } = useAuthNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedAvoidingView>
        <Spacer size={40} />
        <View>
          <ThemedText type="title" weight="semiBold" color="primary">
            Get Started
          </ThemedText>
          <ThemedText customStyles={{ marginTop: 8 }}>
            You can log in or make an account if you’re new
          </ThemedText>
        </View>
        <Spacer size={8} />
        <View style={{ flex: 1, gap: 5 }}>
          <ThemedText
            color="primary"
            weight="medium"
            customStyles={{ fontSize: 14 }}
          >
            Enter your phone number
          </ThemedText>
          <PhoneInput />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Continue" action={toVerify} />
        </View>
      </ThemedAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // padding: 20,
  },
  buttonContainer: {
    height: 54,
    marginBottom: 10,
  },
});
