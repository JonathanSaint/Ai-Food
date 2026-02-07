import { View, StyleSheet, Text } from "react-native";

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <Text>Profile Screen</Text>
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
