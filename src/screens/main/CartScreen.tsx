import SafeAvoidingView from "@components/general/SafeAvoidingView";
import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";

const CartScreen = () => {
  return (
    <SafeAvoidingView
      safeAreaStyle={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>CartScreen</Text>
    </SafeAvoidingView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
