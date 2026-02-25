import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  return (
    <SafeAreaView
      style={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
