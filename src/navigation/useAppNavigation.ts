import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

/**
 * useAppNavigation
 * Wraps useNavigation with RootStack types
 * Use instead of useNavigation() in all screens
 */
export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
