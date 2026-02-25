import { utilityStyles } from "@constants/style";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoriteScreen = () => {
  return (
    <SafeAreaView
      style={[
        utilityStyles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <Text>FavoritesScreen</Text>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
