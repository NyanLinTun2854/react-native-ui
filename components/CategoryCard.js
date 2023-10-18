import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}></View>
      <Text>Name</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    alignItems: "center",
  },
  imgWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: COLORS.light,
  },
});
