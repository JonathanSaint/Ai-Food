// Importing StatusBar to control the top status bar appearance
import { StatusBar } from "expo-status-bar";

// Core React Native components used in this screen
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView, // (Currently not used in this file)
  FlatList,
  Pressable,
} from "react-native";

// Custom reusable components
import FoodItem from "../../components/FoodItems";
import CategoryCard from "../../components/CategoryCards";

// Icon libraries from Expo
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  EvilIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

// Expo Router for navigation
import { Link } from "expo-router";

// Getting device width & height for responsive sizing
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Categories data (used in category section)
const CATEGORIES = [
  { name: "Burger", image: require("../../assets/burger.png") },
  { name: "Taco", image: require("./../../assets/taco.png") },
  { name: "Drink", image: require("./../../assets/drink.png") },
  { name: "Pizza", image: require("./../../assets/pizza.png") },
];

// Food items data (used in FlatList)
const FOODLIST = [
  {
    title: "Buffalo Burger",
    image: require("./../../assets/burgers/BuffaloBurger.png"),
    price: 17820,
    distance: "190m",
    rating: "4.5",
  },
  {
    title: "BBQ Burger",
    image: require("./../../assets/burgers/BBQBurger.png"),
    price: 12260,
    distance: "120m",
    rating: "4.9",
  },
  {
    title: "Beef Burger",
    image: require("./../../assets/burgers/BeefBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Chicken Burger",
    image: require("./../../assets/burgers/ChickenBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Crispy Chicken Burger",
    image: require("./../../assets/burgers/CrispyChickenBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Fish Burger",
    image: require("./../../assets/burgers/FishBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Hawaiian BBQ Burger",
    image: require("./../../assets/burgers/HawaiianBBQBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Mexican Zinger Burger",
    image: require("./../../assets/burgers/MexicanZingerBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("./../../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("./../../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
];

// Main screen component
export default function Menu() {
  return (
    // Main wrapper container
    <View style={styles.mainContainer}>
      {/* Food list rendered using FlatList */}
      <FlatList
        data={FOODLIST} // Data source
        keyExtractor={(item, index) => `${item.title}-${index}`} // Unique key for each item
        renderItem={({ item }) => (
          // Custom FoodItem component for each item
          <FoodItem
            title={item.title}
            image={item.image}
            price={item.price}
            distance={item.distance}
            rating={item.rating}
          />
        )}
        numColumns={2} // Display items in 2-column grid layout
        // Header section that appears above FlatList items
        ListHeaderComponent={
          <View>
            {/* Top Banner Section */}
            <ImageBackground
              source={require("../../assets/background.png")}
              resizeMode="cover"
              style={styles.foodBanner}
            >
              {/* Top Banner Content */}
              <View>
                {/* Location Section */}
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>Your Location</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="white"
                  />
                </View>

                {/* City Name Section */}
                <View style={styles.cityContainer}>
                  <Ionicons name="location-outline" size={24} color="white" />
                  <Text style={styles.cityText}>Manchester</Text>
                </View>

                {/* Top navigation icons (Search & Notification) */}
                <View style={styles.searchBell}>
                  <Link href="/Search" asChild>
                    <Pressable style={styles.iconCircle}>
                      <FontAwesome name="search" size={18} color="white" />
                    </Pressable>
                  </Link>

                  <Link href="/Notifications" asChild>
                    <Pressable style={styles.iconCircle}>
                      <EvilIcons name="bell" size={26} color="white" />
                    </Pressable>
                  </Link>
                </View>
              </View>

              {/* Banner Main Text */}
              <View>
                <Text style={styles.lowerText} numberOfLines={2}>
                  Provide the best food for you
                </Text>
              </View>
            </ImageBackground>

            {/* Category Title Row */}
            <View style={styles.categoryText}>
              <Text style={styles.findCategoryText}>Find by category</Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>

            {/* Category Cards Section */}
            <View style={styles.categoryImages}>
              {CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.name}
                  name={category.name}
                  image={category.image}
                />
              ))}
            </View>
          </View>
        }
      />

      {/* Status Bar configuration (light text for dark background) */}
      <StatusBar style="light" />
    </View>
  );
}

/* Style Sheet */
const styles = StyleSheet.create({
  // Main screen container
  mainContainer: {
    flex: 1, // Takes full screen height
    backgroundColor: "#fcf1d6",
  },

  // Banner background image styling
  foodBanner: {
    height: windowHeight * 0.38, // Responsive height
    width: "100%",
  },

  // Category cards container
  categoryImages: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    rowGap: 16,
    marginBottom: 10,
  },

  // "Your Location" row
  locationContainer: {
    paddingTop: 50,
    paddingLeft: 30,
    flexDirection: "row",
    gap: 5,
  },

  // City name row
  cityContainer: {
    marginTop: 2,
    marginLeft: 24,
    flexDirection: "row",
    gap: 5,
  },

  // Location small text styling
  locationText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "400",
  },

  // City name styling
  cityText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  // Search & notification icons container
  searchBell: {
    position: "absolute",
    top: 50,
    right: 24,
    flexDirection: "row",
    gap: 12,
  },

  // Circular icon button styling
  iconCircle: {
    width: 44,
    aspectRatio: 1, // Ensures perfect square
    borderRadius: 999, // Makes it fully circular
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  // Large banner text styling
  lowerText: {
    color: "white",
    fontSize: 38,
    fontWeight: "600",
    marginTop: 20,
    paddingHorizontal: 20,
    flexShrink: 1,
  },

  // Category title row
  categoryText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  findCategoryText: {
    fontWeight: "700",
    fontSize: 15,
  },

  seeAllText: {
    color: "#ff8800",
    fontWeight: "500",
  },

  foodList: {}, // (Currently unused)
});
