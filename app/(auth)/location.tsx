import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedText from "@/components/general/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../../assets/images/map.svg";
const location = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ flex: 1, justifyContent: "center" }, styles.container]}>
        <Map />
        <Spacer size={40} />
        <View>
          <ThemedText
            type="title"
            weight="semiBold"
            color="primary"
            customStyles={{ textAlign: "center" }}
          >
            Set your location
          </ThemedText>
          <ThemedText customStyles={{ marginTop: 8, textAlign: "center" }}>
            This let us know your location for best shipping experience
          </ThemedText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Continue"
          action="notifications"
          customStyles={{ flex: 0, width: "100%" }}
        />
        <Button
          text="Set Manually"
          type="secondary"
          action="notifications"
          customStyles={{ flex: 0, width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    gap: 10,
    width: "100%",
  },
});
