import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../constants/theme";
import { Link } from "expo-router";
import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Experiences</Text>
        <Link href="" asChild>
          <Text style={styles.seeMore}>See More</Text>
        </Link>
      </View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={(item) => <ExperiencesCard />}
        keyExtractor={(item) => {
          return item;
        }}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Experiences;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: SIZES.medium,
    rowGap: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
  seeMore: {
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
