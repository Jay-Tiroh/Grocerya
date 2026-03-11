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
  const editedfullname = fullname?.replace(/%20/g, " ");
  const editedemail = email?.replace(/%40/g, "@");
  const displayedName = editedfullname || "John Doe";
  const displayedEmail = editedemail || "john.doe@example.com";
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
