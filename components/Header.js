import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SelectList } from "react-native-dropdown-select-list";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DropdownComponent from "./Dropdown";

const Header = () => {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Burmese" },
    { key: "2", value: "English" },
    { key: "3", value: "Japanese" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.selectWrapper}>
        {/* <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          search={false}
          placeholder="Languages"
        /> */}
        <DropdownComponent />
      </View>
      <View style={styles.notiWrapper}>
        <MaterialCommunityIcons
          name="bell"
          size={30}
          style={{ color: COLORS.black }}
        />
        <View style={styles.notiAbsolute} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: SIZES.medium,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectWrapper: {
    width: 150,
  },
  notiWrapper: {
    position: "relative",
  },
  notiAbsolute: {
    position: "absolute",
    width: 15,
    height: 15,
    backgroundColor: COLORS.red,
    borderRadius: 50,
  },
});
