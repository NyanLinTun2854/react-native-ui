import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import Indicator from "./Indicator";
import { COLORS, SIZES } from "../constants/theme";

// npx expo install react-native-pager-view

export default function Caurosel() {
  const ref = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pager}
        ref={ref}
        initialPage={0}
        onPageScroll={(e) => console.log(e)}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        onPageScrollStateChanged={(e) => console.log(e)}
      >
        <View key="1" style={styles.campaign}>
          <Text>Campaign 1</Text>
        </View>
        <View key="2" style={styles.campaign}>
          <Text>Campaign 2</Text>
        </View>
      </PagerView>
      <View style={styles.indicatorWrapper}>
        <Indicator pages={2} current={currentPage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.medium,
    marginTop: 20,
  },
  pager: {
    width: "100%",
    height: 200,
    alignSelf: "stretch",
  },
  campaign: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorWrapper: {
    position: "absolute",
    bottom: 20,
  },
});
