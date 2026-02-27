import SafeAvoidingView from "@components/general/SafeAvoidingView";
import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";

const FavoriteScreen = () => {
  return (
    <SafeAvoidingView
      safeAreaStyle={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>FavoritesScreen</Text>
    </SafeAvoidingView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
