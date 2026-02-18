import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedText from "@/components/general/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Notification from "../../assets/images/notification.svg";
const notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ flex: 1 }, styles.container]}>
        <View>
          <ThemedText type="title" weight="semiBold" color="primary">
            Lastly, please enable notification
          </ThemedText>
          <ThemedText customStyles={{ marginTop: 8 }}>
            Enable your notifications for more update and important messages
            about your grocery needs
          </ThemedText>
        </View>
        <Spacer size={70} />
        <Notification />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Enable Notifications"
          action="index"
          customStyles={{ flex: 0, width: "100%" }}
        />
        <Button
          text="Skip For Now"
          type="secondary"
          action="index"
          customStyles={{ flex: 0, width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default notification;

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
