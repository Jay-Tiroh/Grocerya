import SafeAvoidingView from "@components/general/SafeAvoidingView";
import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAvoidingView
      safeAreaStyle={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>HomeScreen</Text>
    </SafeAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
