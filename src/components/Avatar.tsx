import { utilityStyles } from "@constants/style";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ThemedText from "./general/ThemedText";

interface AvatarProps {
  // Define any props you want to pass to the Avatar component here
  size?: number;
  rounded?: boolean;
  title?: string;
  subtitle?: string;
}
const Avatar = ({
  size = 50,
  rounded = true,
  title,
  subtitle,
}: AvatarProps) => {
  return (
    <View
      style={{ alignItems: "center", flexDirection: "row", flex: 1, gap: 10 }}
    >
      <Image
        source={require("@assets/images/jethro.jpg")}
        style={{
          width: size,
          height: size,
          borderRadius: rounded ? size / 2 : 0,
        }}
      />
      {(title || subtitle) && (
        <View style={[utilityStyles.container, { alignItems: "flex-start" }]}>
          <ThemedText color="primary" weight="medium" customStyles={{}}>
            {title}
          </ThemedText>
          <ThemedText type="tiny" color="secondary" customStyles={{}}>
            {subtitle}
          </ThemedText>
        </View>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
