import React from "react";
import { View, StyleSheet } from "react-native";
import { PageIndicator } from "react-native-page-indicator";

const Indicator = ({ pages, current }) => (
  <View style={styles.wrapper}>
    <PageIndicator count={pages} current={current} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Indicator;
