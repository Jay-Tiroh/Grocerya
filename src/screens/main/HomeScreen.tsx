import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
