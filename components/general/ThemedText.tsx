import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface ThemedTextProps extends TextProps {
  type?: "regular" | "title" | "tiny";
  weight?: "text" | "bold" | "medium" | "semiBold";
  color?: "primary" | "secondary";
  customStyles?: TextStyle;
  children?: React.ReactNode;
}

const ThemedText = ({
  type = "regular",
  weight = "text",
  color = "secondary",
  customStyles,
  children,
  ...otherProps
}: ThemedTextProps) => {
  const style = styles[type];
  const weightStyle = styles[weight];
  const colorStyle = styles[color];

  return (
    <Text
      style={[style, weightStyle, colorStyle, customStyles]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
  },
  medium: {
    fontFamily: "Poppins-Medium",
  },
  semiBold: {
    fontFamily: "Poppins-SemiBold",
  },
  bold: {
    fontFamily: "Poppins-Bold",
  },

  regular: {
    fontSize: 16,
    lineHeight: 1.6 * 18,
  },
  title: {
    fontSize: 20,
  },

  tiny: {
    fontSize: 12,
  },

  primary: {
    color: "#0d0d0d",
  },

  secondary: {
    color: "#777777",
  },
});
