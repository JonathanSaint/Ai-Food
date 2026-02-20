// Importing core React Native components
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";

// Importing icon libraries from Expo
import { Ionicons, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";

// Expo Router hook for navigation
import { useRouter } from "expo-router";

// React hook for managing component state
import { useState } from "react";

// Getting device dimensions for responsive sizing
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// FoodItem component receives props from parent (Menu screen)
export default function FoodItem({ title, image, price, distance, rating }) {
  // Router instance for navigating to FoodDetail screen
  const router = useRouter();

  // State to track whether item is favorited
  const [favorite, setFavorite] = useState();

  // State storing price (currently static — not changing)
  const [quantityPrice] = useState(price);

  return (
    // Main card container (clickable to navigate to details page)
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
      {/* Favorite (heart) button positioned top-right */}
      <Pressable
        onPress={() => setFavorite((favorite) => !favorite)}
        style={styles.favorite}
      >
        <FontAwesome
          name={favorite ? "heart" : "heart-o"} // Toggle filled or outlined heart
          size={16}
          color="red"
        />
      </Pressable>

      {/* Food image */}
      <Image source={image} style={styles.image} />

      {/* Food title (max 2 lines) */}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      {/* Rating and distance container */}
      <View style={styles.ratingDistance}>
        {/* Rating row */}
        <View style={styles.row}>
          <AntDesign name="star" size={16} color="orange" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        {/* Distance row */}
        <View style={styles.row}>
          <Ionicons name="location-outline" size={16} color="orange" />
          <Text style={styles.ratingText}>{distance}</Text>
        </View>
      </View>

      {/* Formatted price display */}
      <Text style={styles.price}>
        {quantityPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "UGX",
        })}
      </Text>
    </Pressable>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  // Card container style
  card: {
    width: "47%", // Responsive 2-column layout
    backgroundColor: "#fcf8f3",
    borderRadius: 20,
    padding: 12,
    height: windowHeight * 0.35, // Responsive height
    marginHorizontal: "1%",
    marginBottom: 20,
  },

  // Food image styling
  image: {
    width: "100%",
    borderRadius: 16,
    maxHeight: 140,
    resizeMode: "cover",
  },

  // Food title styling
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  // Container for rating and distance
  ratingDistance: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  // Row layout for icon + text
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  // Small text for rating and distance
  ratingText: {
    fontSize: 12,
  },

  // Price styling
  price: {
    marginTop: 6,
    color: "orange",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  // Favorite heart button style
  favorite: {
    position: "absolute",
    top: 15,
    right: 14,
    width: 28,
    aspectRatio: 1, // Ensures perfect circle
    borderRadius: 999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
