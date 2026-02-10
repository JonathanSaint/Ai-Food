import { View, StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <Link href="/HelpCenter" asChild>
        <Pressable style={styles.iconCircle}>
          <Ionicons name="settings" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
