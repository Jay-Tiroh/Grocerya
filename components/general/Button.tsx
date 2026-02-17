import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  type?: "primary" | "secondary";
  customStyles?: {};
  customTextStyles?: {};
  action?: () => void;
};

const Button = ({
  text,
  type = "primary",
  customStyles,
  customTextStyles,
  action,
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        type === "primary" ? styles.buttonPri : styles.buttonSec,
        customStyles,
      ]}
      onPress={action}
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
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonPri: {
    backgroundColor: "#0d0d0d",
  },
  buttonSec: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonTextPri: {
    color: "#fff",
  },
  buttonTextSec: {
    color: "#0d0d0d",
  },
});
