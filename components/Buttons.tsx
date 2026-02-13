import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Buttons = ({
  isLast,
  onNext,
  onSkip,
}: {
  isLast: boolean;
  onNext: () => void;
  onSkip: () => void;
}) => {
  return (
    <View style={styles.container}>
      {isLast ? (
        <Pressable
          style={[
            styles.button,
            styles.buttonDark,
            { width: "100%", maxWidth: "100%" },
          ]}
        >
          <Text style={[styles.buttonText, styles.buttonTextDark]}>
            Get Started
          </Text>
        </Pressable>
      ) : (
        // STATE 2: Normal Slide (Skip + Next)
        <>
          <Pressable
            style={[styles.button, styles.buttonLight]}
            onPress={onSkip}
          >
            <Text style={[styles.buttonText, styles.buttonTextLight]}>
              Skip
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonDark]}
            onPress={onNext}
          >
            <Text style={[styles.buttonText, styles.buttonTextDark]}>Next</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 10,
    alignItems: "center",
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonDark: {
    backgroundColor: "#0d0d0d",
  },
  buttonLight: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonTextDark: {
    color: "#fff",
  },
  buttonTextLight: {
    color: "#0d0d0d",
  },
});
