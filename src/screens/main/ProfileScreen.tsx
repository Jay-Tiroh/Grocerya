import DisplayedDetails from "@components/DisplayedDetails";
import SafeAvoidingView from "@components/general/SafeAvoidingView";
import ThemedText from "@components/general/ThemedText";
import { utilityStyles } from "@constants/style";
import { MainTabParamList } from "@navigation/types";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
type ProfileScreenRouteProp = RouteProp<MainTabParamList, "Profile">;
type Props = {
  route: ProfileScreenRouteProp;
};
const ProfileScreen = ({ route }: Props) => {
  const { fullname, email } = route.params || {};

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
        ProfileScreen
      </ThemedText>
      <DisplayedDetails fullname={fullname} email={email} />
    </SafeAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
