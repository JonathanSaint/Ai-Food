import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
      <Tabs.Screen
        name="Menu"
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant-menu" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
