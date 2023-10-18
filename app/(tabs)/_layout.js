import { Tabs } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "News",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} style={{ color }} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              style={{ color }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
