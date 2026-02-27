import React, { useEffect, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    KeyboardAvoidingViewProps,
    Platform,
    StyleProp,
    StyleSheet,
    ViewStyle,
} from "react-native";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";

interface ThemedAvoidingViewProps extends KeyboardAvoidingViewProps {
  children?: React.ReactNode;
  offset?: number;
}

interface SafeAvoidingViewProps
  extends SafeAreaViewProps, ThemedAvoidingViewProps {
  isAvoiding?: boolean;
  safeAreaStyle?: StyleProp<ViewStyle>;
  avoidingViewStyle?: StyleProp<ViewStyle>;
}

const SafeAvoidingView = ({
  children,
  isAvoiding = false,
  offset = 40,
  safeAreaStyle,
  avoidingViewStyle,
  ...props
}: SafeAvoidingViewProps) => {
  const [keyboardHidden, setKeyboardHidden] = useState(true);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardHidden(false),
    );

    const hide = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardHidden(true),
    );

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  if (!isAvoiding) {
    return (
      <SafeAreaView
        {...props}
        style={[styles.container, styles.padded, safeAreaStyle]}
      >
        {children}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView {...props} style={[styles.container, safeAreaStyle]}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : offset}
        enabled={!keyboardHidden}
        style={[
          styles.container,
          styles.padded,
          keyboardHidden ? styles.flexGrow : styles.flex,
          avoidingViewStyle,
        ]}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SafeAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  padded: {
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
});
