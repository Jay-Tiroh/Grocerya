import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedText from "@/components/general/ThemedText";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  "Gluten-Free",
  "Vegan Friendly",
  "Raw Meat",
  "Organic",
  "Dairy-Free",
  "Sugar-Free",
  "Cruelty-Free",
  "Processed Food",
  "Show +22 More",
];

const category = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );
  const handleSelectCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Spacer size={40} />
      <View>
        <ThemedText type="title" weight="semiBold" color="primary">
          All your grocery need in one place
        </ThemedText>
        <ThemedText customStyles={{ marginTop: 8 }}>
          Select your desired shop category
        </ThemedText>
      </View>
      <View style={styles.categoryWrapper}>
        {categories.map((category) => (
          <Pressable
            key={category}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
              width: "auto",
              borderColor: selectedCategories.includes(category)
                ? "#2DB217"
                : "transparent",
              borderWidth: 1,
              backgroundColor: selectedCategories.includes(category)
                ? "rgba(29, 215, 0, 0.1)"
                : "#F5F5F5",
              borderRadius: 100,
              height: 46,
            }}
            onPress={() => {
              handleSelectCategory(category);
            }}
          >
            <ThemedText
              color="primary"
              weight="medium"
              customStyles={{
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {category}
            </ThemedText>
          </Pressable>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Continue" action="location" />
      </View>
    </SafeAreaView>
  );
};

export default category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    height: 54,
    marginBottom: 30,
  },
  categoryWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 30,
  },
});
