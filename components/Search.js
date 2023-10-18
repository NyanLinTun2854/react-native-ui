import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constants/theme";

const Search = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.medium,
        marginTop: 20,
      }}
    >
      <TextInput
        style={{
          width: "80%",
          paddingVertical: 10,
          paddingStart: 10,
          borderWidth: 0.8,
          borderStyle: "solid",
          borderColor: COLORS.black,
          borderRadius: 10,
        }}
        placeholder="Search"
      />
      <TouchableOpacity
        style={{
          width: "15%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.light,
          borderRadius: 10,
        }}
      >
        <MaterialCommunityIcons
          name="magnify"
          size={30}
          style={{ color: COLORS.black }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
