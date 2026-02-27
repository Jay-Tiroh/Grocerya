import PhoneInput from "@components/auth/PhoneInput";
import Button from "@components/general/Button";
import SafeAvoidingView from "@components/general/SafeAvoidingView";
import Spacer from "@components/general/Spacer";
import ThemedText from "@components/general/ThemedText";
import { useAuthNavigation } from "@navigation/useAuthNavigation";
import React from "react";
import { StyleSheet, View } from "react-native";

const Register = () => {
  const { toVerify } = useAuthNavigation();
  return (
    <SafeAvoidingView isAvoiding>
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
    </SafeAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 54,
    marginBottom: 30,
  },
});
