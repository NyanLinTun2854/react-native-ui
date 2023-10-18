import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { SIZES } from "../constants/theme";

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Title</Text>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={(item) => <CategoryCard />}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: SIZES.medium,
    rowGap: 10,
  },
  title: {
    fontSize: 16,
  },
});
