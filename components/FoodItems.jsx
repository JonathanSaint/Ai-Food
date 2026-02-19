import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const windowHeight = Dimensions.get("window").height;

export default function FoodItem({ title, image, price, distance, rating }) {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/FoodDetail",
          params: {
            name: title,
            image: image,
            price: price,
            distance: distance,
            rating: rating,
          },
        })
      }
      style={styles.card}
    >
      <Pressable
        style={styles.favorite}
        onPress={() => setIsFavorite((isFavorite) => !isFavorite)}
      >
        <FontAwesome
          name={isFavorite ? "heart" : "heart-o"}
          size={22}
          color="orange"
        />
      </Pressable>

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

      <Text style={styles.price}>
        {typeof price === "number" ? `UGX ${price.toLocaleString()}` : price}
      </Text>
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
    height: windowHeight * 0.27, // 👈 dynamic height
    marginHorizontal: "1.5%", // 👈 spacing between cards
  },

  image: {
    width: "100%",
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
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
