import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedText from "./general/ThemedText";

const DisplayedDetails = ({
  fullname,
  email,
}: {
  fullname?: string;
  email?: string;
}) => {
  const displayedName = fullname || "John Doe";
  const displayedEmail = email || "john.doe@example.com";
  return (
    <View>
      <ThemedText color="secondary" weight="medium">
        Fullname: {displayedName}
      </ThemedText>
      <ThemedText color="secondary" weight="medium">
        Email: {displayedEmail}
      </ThemedText>
    </View>
  );
};

export default DisplayedDetails;

const styles = StyleSheet.create({});
