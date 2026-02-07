import { View, StyleSheet, Text } from "react-native";

export default function Cart() {
  return (
    <View style={styles.mainContainer}>
      <Text>Cart Screen</Text>
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
