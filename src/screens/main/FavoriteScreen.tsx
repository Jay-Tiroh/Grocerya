import DisplayedDetails from "@components/DisplayedDetails";
import SafeAvoidingView from "@components/general/SafeAvoidingView";
import ThemedText from "@components/general/ThemedText";
import { utilityStyles } from "@constants/style";
import { MainTabParamList } from "@navigation/types";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
type FavoriteScreenRouteProp = RouteProp<MainTabParamList, "Favorite">;
type Props = {
  route: FavoriteScreenRouteProp;
};
const FavoriteScreen = ({ route }: Props) => {
  const { fullname: rawFullname, email: rawEmail } = route.params || {};
  const fullname = rawFullname.replace(/%20/g, " ");
  const email = rawEmail.replace(/%40/g, "@");

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
        FavoriteScreen
      </ThemedText>

      <DisplayedDetails fullname={fullname} email={email} />
    </SafeAvoidingView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
