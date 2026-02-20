// Status bar control
import { StatusBar } from "expo-status-bar";

// Core React Native components
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView, // (Currently not used)
  Pressable,
  FlatList,
} from "react-native";

// React state hook
import { useState } from "react";

// Icon libraries
import {
  Ionicons,
  Feather,
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

// Reusable food card component
import FoodItem from "../components/FoodItems";

// Hook to access route params from Expo Router
import { useLocalSearchParams } from "expo-router/build/hooks";

// Get device height for responsive image sizing
const windowHeight = Dimensions.get("window").height;

// Recommended food list data
const FOODLIST = [
  {
    title: "Buffalo Burger",
    image: require("./../assets/burgers/BuffaloBurger.png"),
    price: 17820,
    distance: "190m",
    rating: "4.5",
  },
  {
    title: "BBQ Burger",
    image: require("./../assets/burgers/BBQBurger.png"),
    price: 12260,
    distance: "120m",
    rating: "4.9",
  },
  {
    title: "Beef Burger",
    image: require("./../assets/burgers/BeefBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Chicken Burger",
    image: require("./../assets/burgers/ChickenBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Crispy Chicken Burger",
    image: require("./../assets/burgers/CrispyChickenBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Fish Burger",
    image: require("./../assets/burgers/FishBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Hawaiian BBQ Burger",
    image: require("./../assets/burgers/HawaiianBBQBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Mexican Zinger Burger",
    image: require("./../assets/burgers/MexicanZingerBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
];

export default function FoodDetail() {
  // Get parameters passed from previous screen
  const params = useLocalSearchParams();

  // Convert price from string (params) to number
  const price = Number(params.price);

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Total price state (price × quantity)
  const [quantityPrice, setQuantityPrice] = useState(price);

  console.log(params); // Debugging params

  // Increase quantity and total price
  function handlePriceIncrease() {
    setQuantity(quantity + 1);
    setQuantityPrice(quantityPrice + price);
  }

  // Decrease quantity and total price
  function handlePriceDecrease() {
    setQuantity(quantity - 1);
    setQuantityPrice(quantityPrice - price);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.foodList}>
        {/* Recommended food list */}
        <FlatList
          data={FOODLIST}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => (
            <FoodItem
              title={item.title}
              image={item.image}
              price={item.price}
              distance={item.distance}
              rating={item.rating}
            />
          )}
          numColumns={2}
          // Header content above recommended list
          ListHeaderComponent={
            <View>
              {/* Main food image */}
              <View style={styles.imageWrapper}>
                <Image source={params.image} style={styles.foodImage} />

                {/* Image indicator bars */}
                <View style={styles.changeImageContainer}>
                  <View style={styles.changeImage}></View>
                  <View style={styles.changeImage}></View>
                  <View style={styles.changeImage}></View>
                </View>
              </View>

              {/* Food title & price */}
              <View style={styles.foodBio}>
                <Text style={styles.foodTitle}>{params.name}</Text>
                <Text style={styles.foodPrice}>
                  {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "UGX",
                  })}
                </Text>
              </View>

              {/* Delivery details */}
              <View style={styles.deliveryContainer}>
                <View style={styles.deliveryDetail}>
                  <FontAwesome5 name="dollar-sign" size={19} color="orange" />
                  <Text style={styles.deliveryText}>Free Delivery</Text>
                </View>

                <View style={styles.deliveryDetail}>
                  <FontAwesome name="clock-o" size={19} color="orange" />
                  <Text style={styles.deliveryText}>20 - 30</Text>
                </View>

                <View style={styles.deliveryDetail}>
                  <AntDesign name="star" size={19} color="orange" />
                  <Text style={styles.deliveryText}>{params.rating}</Text>
                </View>
              </View>

              {/* Divider */}
              <View style={styles.horizontalLine}></View>

              {/* Description section */}
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>
                  Burger With Meat is a typical food from our restaurant that is
                  much in demand by many people, this is very recommended for
                  you.
                </Text>
              </View>

              {/* Recommended header text */}
              <View style={styles.categoryText}>
                <Text style={styles.findCategoryText}>Recommended For You</Text>
                <Text style={styles.seeAllText}>See all</Text>
              </View>
            </View>
          }
        />

        {/* Bottom fixed section */}
        <View style={styles.bottomContainer}>
          {/* Quantity selector & total price */}
          <View style={styles.incrementorContainer}>
            <View style={styles.incrementor}>
              <Pressable onPress={handlePriceDecrease}>
                <Entypo name="minus" size={28} color="black" />
              </Pressable>

              <Text style={styles.incrementorText}>{quantity}</Text>

              <Pressable onPress={handlePriceIncrease}>
                <Entypo name="plus" size={28} color="black" />
              </Pressable>
            </View>

            <View>
              <Text style={styles.incrementedPrice}>
                {quantityPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "UGX",
                })}
              </Text>
            </View>
          </View>

          {/* Add to cart button */}
          <Pressable style={styles.cartButton}>
            <AntDesign name="shopping-cart" size={24} color="white" />
            <Text style={styles.cartText}>Add to Cart</Text>
          </Pressable>
        </View>

        {/* Status bar styling */}
        <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, // Full screen height
  },

  foodImage: {
    alignSelf: "center",
    width: "100%",
    height: windowHeight * 0.5, // Large top image
    borderRadius: 25,
  },

  imageWrapper: {
    position: "relative", // Allows absolute positioning of indicators
  },

  changeImageContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    gap: 10,
  },

  changeImage: {
    height: 5,
    width: 50,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 30,
  },

  foodBio: {
    flexDirection: "column",
    marginHorizontal: 15,
    marginTop: 10,
    gap: 7,
  },

  foodTitle: {
    fontSize: 30,
    fontWeight: "700",
  },

  foodPrice: {
    color: "orange",
    fontSize: 25,
    fontWeight: "700",
  },

  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#f3ebe3",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 15,
  },

  deliveryDetail: {
    flexDirection: "row",
    gap: 8,
  },

  deliveryText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#757171",
  },

  horizontalLine: {
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#babac7",
    marginTop: 10,
  },

  descriptionContainer: {
    marginHorizontal: 15,
  },

  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
    color: "#333131",
  },

  incrementorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 20,
  },

  incrementor: {
    flexDirection: "row",
    gap: 25,
    paddingHorizontal: 15,
  },

  incrementedPrice: {
    color: "orange",
    fontSize: 23,
    fontWeight: "700",
    paddingHorizontal: 15,
  },

  cartButton: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "orange",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    alignSelf: "center",
  },

  bottomContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "#ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
    gap: 30,
  },

  cartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  incrementorText: {
    fontSize: 25,
    fontWeight: "600",
  },

  categoryText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 20,
  },

  findCategoryText: {
    fontWeight: "700",
    fontSize: 15,
  },

  seeAllText: {
    color: "#ff8800",
    fontWeight: "500",
  },

  foodList: {
    flex: 1,
    gap: 16,
  },
});
