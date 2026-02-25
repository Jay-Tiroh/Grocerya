import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// svg images
import BackSvg from "@assets/images/back.svg";
import HelpSvg from "@assets/images/help.svg";
import { useAppNavigation } from "@navigation/useAppNavigation";

type CustomHeaderProps = {
  title?: string;
  goBack?: boolean;
  infoBtn?: boolean;
};

const CustomHeader = ({ title, infoBtn, goBack }: CustomHeaderProps) => {
  const navigator = useAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* back btn */}
      {goBack && (
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          hitSlop={{ top: 20, bottom: 30, left: 20, right: 20 }}
        >
          <BackSvg style={styles.svg} />
        </TouchableOpacity>
      )}

      {/* title */}
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>{title}</Text>

      {/* info btn */}
      {infoBtn && (
        <Pressable
          style={styles.svgWrapper}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <HelpSvg style={styles.svg} />
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },

  svg: {
    width: 24,
    height: 24,
    tintColor: "#777777",
  },

  svgWrapper: {
    padding: 4,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#F8F8F8",
  },
});
