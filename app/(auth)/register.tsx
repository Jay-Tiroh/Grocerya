import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedText from "@/components/general/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer size={40} />
      <View>
        <ThemedText type="title" weight="semiBold" color="primary">
          Get Started
        </ThemedText>
        <ThemedText customStyles={{ marginTop: 8 }}>
          You can log in or make an account if you’re new
        </ThemedText>
      </View>
      <View style={{ flex: 1 }}>
        <ThemedText
          color="primary"
          weight="medium"
          customStyles={{ fontSize: 14 }}
        >
          Enter your phone number
        </ThemedText>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Continue" action="verify" />
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    height: 54,
    marginBottom: 30,
  },
});
