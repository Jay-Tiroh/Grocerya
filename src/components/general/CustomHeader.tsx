import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BackSvg from "@assets/images/back.svg";
import HelpSvg from "@assets/images/help.svg";
import { useAppNavigation } from "@navigation/useAppNavigation";
import SafeAvoidingView from "./SafeAvoidingView";

type CustomHeaderProps = {
  title?: string;
  goBack?: boolean;
  infoBtn?: boolean;
  rightBtn?: React.ComponentType<any>;
  rightBtnAction?: () => void;
};

const CustomHeader = ({
  title,
  infoBtn,
  goBack,
  rightBtn: RightBtn,
  rightBtnAction,
}: CustomHeaderProps) => {
  const navigator = useAppNavigation();

  return (
    <SafeAvoidingView safeAreaStyle={styles.container}>
      {/* LEFT */}
      <View style={styles.side}>
        {goBack && (
          <TouchableOpacity
            style={styles.svgWrapper}
            onPress={() => navigator.goBack()}
            hitSlop={20}
          >
            <BackSvg style={styles.svg} />
          </TouchableOpacity>
        )}
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* RIGHT */}
      <View style={[styles.side, styles.right]}>
        {RightBtn && (
          <TouchableOpacity onPress={rightBtnAction} hitSlop={20}>
            <RightBtn />
          </TouchableOpacity>
        )}

        {infoBtn && (
          <Pressable style={styles.svgWrapper} hitSlop={20}>
            <HelpSvg style={styles.svg} />
          </Pressable>
        )}
      </View>
    </SafeAvoidingView>
  );
};

export default CustomHeader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    height: 70,
    width: "100%",
  },

  side: {
    // width: 60, // reserves space ALWAYS
    // justifyContent: "center",
  },

  right: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 12,
  },

  center: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
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
    borderRadius: 16,
    backgroundColor: "#F8F8F8",
  },
});
