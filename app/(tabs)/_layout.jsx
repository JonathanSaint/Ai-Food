import { MaterialIcons } from "@expo/vector-icons";
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
    </Tabs>
  );
}
