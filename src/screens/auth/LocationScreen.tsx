import Map from "@assets/images/map.svg";
import Button from "@components/general/Button";
import SafeAvoidingView from "@components/general/SafeAvoidingView";
import Spacer from "@components/general/Spacer";
import ThemedText from "@components/general/ThemedText";
import { useAuthNavigation } from "@navigation/useAuthNavigation";
import React from "react";
import { StyleSheet, View } from "react-native";

const Location = () => {
  const { toNotification } = useAuthNavigation();

  return (
    <SafeAvoidingView safeAreaStyle={{ alignItems: "center" }}>
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
          action={toNotification}
          customStyles={{ flex: 0, width: "100%" }}
        />
        <Button
          text="Set Manually"
          type="secondary"
          action={toNotification}
          customStyles={{ flex: 0, width: "100%" }}
        />
      </View>
    </SafeAvoidingView>
  );
};

export default Location;

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
