import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ExperiencesCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <View style={styles.favoriteWrapper}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={15}
            style={{ color: COLORS.black }}
          />
          <Text style={styles.favoriteCount}>20</Text>
        </View>
      </View>
      <Text style={styles.title}>Title</Text>
      <View style={styles.nameWrapper}>
        <View style={styles.nameAvator}></View>
        <Text style={styles.name}>Name</Text>
      </View>
    </View>
  );
};

export default ExperiencesCard;

const styles = StyleSheet.create({
  container: {
    rowGap: 5,
  },
  imgWrapper: {
    position: "relative",
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: COLORS.light,
  },
  favoriteWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 8,
    right: 8,
    columnGap: 3,
  },
  favoriteCount: {
    fontSize: 10,
  },
  title: {
    fontSize: 13,
  },
  nameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  nameAvator: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: COLORS.light,
  },
  name: {
    fontSize: 10,
  },
});
