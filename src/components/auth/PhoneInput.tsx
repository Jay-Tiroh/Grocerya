import ThemedText from "@components/general/ThemedText";
import ThemedTextInput from "@components/general/ThemedTextInput";
import { colors } from "@constants/style";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>("ID");
  const [callingCode, setCallingCode] = useState("62");
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setVisible(false); // Close modal after selection
  };
  return (
    <View style={styles.container}>
      {/* Country Selector Side */}
      <TouchableOpacity
        style={[styles.greyBox, { width: 100 }]}
        onPress={() => setVisible(true)}
      >
        <CountryPicker
          {...{
            countryCode,
            withFilter: true,
            withFlag: true,
            withAlphaFilter: false,
            withCallingCode: false,
            onSelect,
            visible,
            onClose: () => setVisible(false),
          }}
        />
        <ThemedText weight="medium" color="primary" style={{ marginLeft: 5 }}>
          +{callingCode}
        </ThemedText>
      </TouchableOpacity>

      {/* Input Side */}
      <View style={[styles.greyBox, { flex: 1, maxWidth: 294 }]}>
        <ThemedTextInput
          customStyles={{
            flex: 1,
            fontSize: 14,
          }}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Phone Number"
          maxLength={11}
          multiline={false}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    width: "100%", // Changed from flex: 1 to avoid layout stretching
    paddingRight: 10,
  },
  greyBox: {
    backgroundColor: colors.accent,
    height: 52,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
