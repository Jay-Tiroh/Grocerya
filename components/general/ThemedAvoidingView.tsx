import React, { Children, useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
} from "react-native";

interface ThemedAvoidingViewProps extends KeyboardAvoidingViewProps {
  children?: React.ReactNode;
  offset?: number;
}

const ThemedAvoidingView = ({
  children,
  offset = 40,
  ...props
}: ThemedAvoidingViewProps) => {
  const [flexToggle, setFlexToggle] = useState(false);
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setFlexToggle(false);
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setFlexToggle(true);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : offset}
      style={
        flexToggle
          ? [{ flexGrow: 1 }, styles.container]
          : [{ flex: 1 }, styles.container]
      }
      enabled={!flexToggle}
    >
      {Children.map(children, (child) => child)}
    </KeyboardAvoidingView>
  );
};

export default ThemedAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
  },
});
