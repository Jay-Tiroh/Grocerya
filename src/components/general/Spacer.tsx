import React from "react";
import { View } from "react-native";

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
};

const Spacer = ({ size = 10, horizontal = false }: SpacerProps) => {
  return (
    <View
      style={{
        width: horizontal ? size : "auto",
        height: horizontal ? "auto" : size,
      }}
    />
  );
};

export default Spacer;
