import { View, StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";

export default function Messages() {
  return (
    <View style={styles.mainContainer}>
      <Link href="/HelpCenter" asChild>
        <Pressable style={styles.iconCircle}>
          <EvilIcons name="bell" size={26} color="white" />
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
