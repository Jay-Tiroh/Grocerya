import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OnboardingItem = ({
  SvgComponent,
  title,
  description,
}: {
  SvgComponent: any;
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <SvgComponent style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 210,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0d0d0d",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    maxWidth: 372,
    color: "#777777",
  },
});
