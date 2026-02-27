import ThemedText from "@components/general/ThemedText";
import { colors } from "@constants/style";
import React, { useState } from "react";
import { Platform, StyleSheet, TextInputProps, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 5;
const autoComplete = Platform.select<TextInputProps["autoComplete"]>({
  android: "sms-otp",
  default: "one-time-code",
});
const OTPInput = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={OTPStyles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={autoComplete}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <ThemedText
            key={index}
            customStyles={OTPStyles.cell}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused && <Cursor />)}
          </ThemedText>
        )}
      />
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    justifyContent: "center",
  },
});

const OTPStyles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: 58,
  },
  cell: {
    width: 70,
    height: 52,
    lineHeight: 52,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: colors.accent,
    borderRadius: 8,
  },
  focusCell: {
    borderColor: "#000",
  },
});
