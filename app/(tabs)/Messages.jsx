import { View, StyleSheet, Text } from "react-native";

export default function Messages() {
  return (
    <View style={styles.mainContainer}>
      <Text>Messages Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
