import Buttons from "@/components/Buttons";
import OnboardingItem from "@/components/OnboardingItem";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../assets/images/box.svg";
import CashRegister from "../assets/images/cash-register.svg";
import Trolley from "../assets/images/trolley.svg";
import Truck from "../assets/images/truck.svg";

const OnboardingItems = [
  {
    id: 1,
    title: "Welcome to Grocerya",
    description:
      "Get your grocery needs at your service within a minute. fast, efficient, and convenient.",
    SvgComponent: Trolley,
  },
  {
    id: 2,
    title: "Get any packages delivered",
    description:
      "Get all your items conveniently, ensuring everything you need arrive without any hassle.",
    SvgComponent: Truck,
  },
  {
    id: 3,
    title: "Protected package delivery.",
    description:
      "Your groceries are carefully packaged to ensure they arrive safely and in perfect condition.",
    SvgComponent: Box,
  },
  {
    id: 4,
    title: "Best price guaranteed",
    description:
      "Allowing you to stock up on your favorite items while staying within your budget.",
    SvgComponent: CashRegister,
  },
];

const Onboarding = () => {
  const [isLast, setIsLast] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (position: number) => {
    setIsLast(position === OnboardingItems.length - 1);
    setCurrentPage(position);
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleSkip = () => {
    setCurrentPage(OnboardingItems.length - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.indicatorWrapper}>
        {OnboardingItems.map((item) => (
          <View
            key={item.id}
            style={[
              styles.indicator,
              item.id === currentPage + 1 ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}
      >
        {OnboardingItems.map((item) => (
          <View key={item.id}>
            <OnboardingItem
              SvgComponent={item.SvgComponent}
              title={item.title}
              description={item.description}
            />
          </View>
        ))}
      </PagerView>

      <Buttons isLast={isLast} onNext={handleNext} onSkip={handleSkip} />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pagerView: {
    flex: 1,
  },
  indicatorWrapper: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  indicator: {
    width: "20%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f3",
  },
  activeIndicator: {
    backgroundColor: "#0d0d0d",
  },
});
