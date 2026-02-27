import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary";
  customStyles?: ViewStyle;
  customTextStyles?: TextStyle;
  action?: string | (() => void);
};

const Button = ({
  text,
  type = "primary",
  customStyles,
  customTextStyles,
  action,
}: ButtonProps) => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    if (typeof action === "function") {
      action();
    } else if (typeof action === "string") {
      navigation.navigate(action);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === "primary" ? styles.buttonPri : styles.buttonSec,
        customStyles,
        pressed && { opacity: 0.7 },
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.buttonText,
          type === "primary" ? styles.buttonTextPri : styles.buttonTextSec,
          customTextStyles,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 14,
  },
  buttonPri: {
    backgroundColor: "#0d0d0d",
  },
  buttonSec: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  buttonTextPri: {
    color: "#fff",
  },
  buttonTextSec: {
    color: "#0d0d0d",
  },
});
