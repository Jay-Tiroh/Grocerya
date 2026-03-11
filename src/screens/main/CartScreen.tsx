import SafeAvoidingView from "@components/general/SafeAvoidingView";
import ThemedText from "@components/general/ThemedText";
import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet } from "react-native";

const CartScreen = () => {
  return (
    <SafeAvoidingView
      safeAreaStyle={[
        utilityStyles.container,
        {
          marginTop: 40,
        },
      ]}
    >
      <ThemedText color="primary" type="title" weight="bold">
        CartScreen
      </ThemedText>
    </SafeAvoidingView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
