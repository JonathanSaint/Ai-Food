import { Stack } from "expo-router";

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
    </Stack>
  );
}
