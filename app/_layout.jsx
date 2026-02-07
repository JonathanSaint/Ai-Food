import { Stack } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="Notifications"
        options={{
          headerShown: true,
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="FoodDetail"
        options={{
          headerShown: true,
          headerTitle: "About This Menu",
          headerRight: () => (
            <Pressable style={styles.favorite}>
              <Feather name="heart" size={24} color="black" />
            </Pressable>
          ),
          headerBackTitle: "Back",
          headerTransparent: true,
          headerTitleStyle: {
            color: "#ffff",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        options={{
          headerShown: true,
          headerTitle: "Help Center",
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  favorite: {
    marginRight: 2,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});