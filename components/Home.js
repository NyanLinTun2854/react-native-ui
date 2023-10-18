import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Caurosel from "./Caurosel";
import Search from "./Search";
import Category from "./Category";
import Popular from "./Popular";
import Experiences from "./Experiences";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Caurosel />
        <Search />
        <Category />
        <Popular />
        <Experiences />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
