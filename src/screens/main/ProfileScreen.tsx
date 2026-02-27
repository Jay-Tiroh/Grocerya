import SafeAvoidingView from "@components/general/SafeAvoidingView";
import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <SafeAvoidingView
      safeAreaStyle={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>ProfileScreen</Text>
    </SafeAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
