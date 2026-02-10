import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FoodItem({ title, image, price, distance, rating }) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push("/FoodDetail")} style={styles.card}>
      <View style={styles.favorite}>
        <Feather name="heart" size={16} color="red" />
      </View>

      <Image source={image} style={styles.image} />

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <View style={styles.ratingDistance}>
        <View style={styles.row}>
          <AntDesign name="star" size={16} color="orange" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={16} color="orange" />
          <Text style={styles.ratingText}>{distance}</Text>
        </View>
      </View>

      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%", // 👈 responsive grid
    backgroundColor: "#fcf8f3",
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
  },

  image: {
    width: "100%",
    aspectRatio: 1.1, // 👈 keeps image balanced
    borderRadius: 16,
    maxHeight: 140,
    resizeMode: "cover",
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  ratingDistance: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  ratingText: {
    fontSize: 12,
  },

  price: {
    marginTop: 6,
    color: "orange",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  favorite: {
    position: "absolute",
    top: 15,
    right: 12,
    width: 28,
    aspectRatio: 1, // 👈 perfect circle
    borderRadius: 999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});