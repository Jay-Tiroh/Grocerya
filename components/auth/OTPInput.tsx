import { colors } from "@/constants/style";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import ThemedTextInput from "../general/ThemedTextInput";
const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  // Create an array of refs to control focus
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    // Logic for Paste
    if (text.length > 1) {
      const digits = text
        .split("")
        .filter((d) => /\d/.test(d))
        .slice(0, 5);
      const newOtp = [...otp];
      digits.forEach((d, i) => (newOtp[i] = d));
      setOtp(newOtp);
      inputs.current[Math.min(digits.length, 4)]?.focus();
      return;
    }

    // Logic for manual typing
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 4) inputs.current[index + 1]?.focus();
  };

  const handleKeyPress = (e: any, index: number) => {
    // Logic for backspace: move to previous input if current is empty
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <ThemedTextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
              inputs.current[index - 1]?.focus();
            }
          }}
          keyboardType="number-pad" // Better for OTP as it shows only numbers
          maxLength={index === 0 ? 5 : 1} // Allow 5 on first box to catch paste
          textContentType="oneTimeCode"
          customStyles={styles.greyBox}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    // paddingRight: 10,
    justifyContent: "center",
  },

  greyBox: {
    backgroundColor: colors.accent,
    height: 52,
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
