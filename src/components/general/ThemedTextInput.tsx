import React, { forwardRef } from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native";

interface ThemedTextInputProps extends TextInputProps {
  type?: "regular" | "title" | "tiny";
  weight?: "text" | "bold" | "medium" | "semiBold";
  color?: "primary" | "secondary";
  customStyles?: TextStyle;
}
const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(
  (
    {
      type = "regular",
      weight = "text",
      color = "secondary",
      customStyles,
      ...otherProps
    }: ThemedTextInputProps,
    ref,
  ) => {
    const style = styles[type];
    const weightStyle = styles[weight];
    const colorStyle = styles[color];
    return (
      <TextInput
        ref={ref}
        style={[style, weightStyle, colorStyle, customStyles]}
        {...otherProps}
      />
    );
  },
);

export default ThemedTextInput;

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
