import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function CategoryCard({ name, image }) {
  return (
    <Pressable onPress={() => console.log("pressed")} style={styles.card}>
      <View style={styles.foodCategory}>
        <Image source={image} style={styles.foodImage} />
        <Text style={styles.label}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "23%", // 👈 adapts to screen width
    alignItems: "center",
  },

  foodCategory: {
    width: "100%",
    aspectRatio: 1, // 👈 perfect square
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdbe89",
  },

  foodImage: {
    width: 28,
    height: 28,
    marginBottom: 6,
    resizeMode: "contain",
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});

