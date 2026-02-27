import Button from "@/components/general/Button";
import Spacer from "@/components/general/Spacer";
import ThemedText from "@/components/general/ThemedText";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const baseCategories = [
  "Gluten-Free",
  "Vegan Friendly",
  "Raw Meat",
  "Organic",
  "Dairy-Free",
  "Sugar-Free",
  "Cruelty-Free",
  "Processed Food",
];

const extraCategories = [
  "Seafood",
  "Bakery",
  "Beverages",
  "Snacks",
  "Frozen Food",
  "Grains",
  "Canned Goods",
  "Spices",
  "Fruits",
  "Vegetables",
  "Herbs",
  "Nuts",
  "Breakfast",
  "Baby Food",
  "Pet Food",
  "Supplements",
  "Meat Alternatives",
  "Pasta",
  "Rice",
  "Sauces",
  "Condiments",
  "Health Drinks",
];

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [visibleExtraCount, setVisibleExtraCount] = useState(0);

  const handleSelectCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category],
    );
  };

  const handleShowMore = () => {
    setVisibleExtraCount((prev) => Math.min(prev + 8, extraCategories.length));
  };

  const visibleExtras = extraCategories.slice(0, visibleExtraCount);
  const remainingCount = extraCategories.length - visibleExtraCount;

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content Area */}
      <View style={{ flex: 1 }}>
        <Spacer size={40} />

        <View>
          <ThemedText type="title" weight="semiBold" color="primary">
            All your grocery need in one place
          </ThemedText>

          <ThemedText customStyles={{ marginTop: 8 }}>
            Select your desired shop category
          </ThemedText>
        </View>

        <View style={{ flex: 1, marginVertical: 10, paddingVertical: 0 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoryWrapper}
            style={{ flex: 1, paddingBottom: 20 }}
          >
            {[...baseCategories, ...visibleExtras].map((category) => {
              const isSelected = selectedCategories.includes(category);

              return (
                <Pressable
                  key={category}
                  style={[
                    styles.categoryItem,
                    {
                      borderColor: isSelected ? "#2DB217" : "transparent",
                      backgroundColor: isSelected
                        ? "rgba(29, 215, 0, 0.1)"
                        : "#F5F5F5",
                    },
                  ]}
                  onPress={() => handleSelectCategory(category)}
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
              );
            })}

            {remainingCount > 0 && (
              <Pressable style={styles.showMoreButton} onPress={handleShowMore}>
                <ThemedText weight="medium">
                  Show {remainingCount}+ More
                </ThemedText>
              </Pressable>
            )}
          </ScrollView>
        </View>
      </View>

      {/* Fixed Bottom Button */}
      <View style={styles.buttonContainer}>
        <Button text="Continue" action="location" />
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 100,
    height: 46,
  },
  showMoreButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    height: 46,
  },
  buttonContainer: {
    height: 54,
    marginBottom: 30,
  },
});
