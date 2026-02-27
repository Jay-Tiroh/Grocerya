import Box from "@assets/images/box.svg";
import CashRegister from "@assets/images/cash-register.svg";
import Trolley from "@assets/images/trolley.svg";
import Truck from "@assets/images/truck.svg";
import OnboardingItem from "@components/OnboardingItem";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Button from "@components/general/Button";
import SafeAvoidingView from "@components/general/SafeAvoidingView";
import { useAppNavigation } from "@navigation/useAppNavigation";

const { width } = Dimensions.get("window");

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
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useAppNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    // console.log("Scroll offset:", offset);
    const index = Math.round(offset / width);

    if (index !== currentPage) {
      handlePageChange(index);
    }
  };

  const handlePageChange = (position: number) => {
    setIsLast(position === OnboardingItems.length - 1);
    setCurrentPage(position);
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage < OnboardingItems.length) {
      scrollRef.current?.scrollTo({ x: nextPage * width, animated: true });
    }
  };

  const handleSkip = () => {
    const lastPage = OnboardingItems.length - 1;
    scrollRef.current?.scrollTo({ x: lastPage * width, animated: true });
  };

  return (
    <SafeAvoidingView safeAreaStyle={styles.container}>
      {/* Indicators */}
      <View style={styles.indicatorWrapper}>
        {OnboardingItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentPage ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>

      {/* Main Slider */}
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {OnboardingItems.map((item) => (
          <View key={item.id} style={{ width }}>
            <OnboardingItem
              SvgComponent={item.SvgComponent}
              title={item.title}
              description={item.description}
            />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        {isLast ? (
          <Button
            text="Get Started"
            action={() => navigation.replace("Auth")}
          />
        ) : (
          <>
            <Button text="Skip" type="secondary" action={handleSkip} />
            <Button text="Next" action={handleNext} />
          </>
        )}
      </View>
    </SafeAvoidingView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 10,
    alignItems: "center",
  },
});
