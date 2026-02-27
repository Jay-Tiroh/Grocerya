import { useAppNavigation } from "./useAppNavigation";

export const useAuthNavigation = () => {
  const navigation = useAppNavigation();
  return {
    ...navigation,
    toRegister: () => navigation.navigate("Auth", { screen: "Register" }),
    toVerify: () => navigation.navigate("Auth", { screen: "Verify" }),
    toLocation: () => navigation.navigate("Auth", { screen: "Location" }),
    toCategory: () => navigation.navigate("Auth", { screen: "Category" }),
    toNotification: () =>
      navigation.navigate("Auth", { screen: "Notification" }),
  };
};
