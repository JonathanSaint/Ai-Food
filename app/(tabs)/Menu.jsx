import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import FoodItem from "../../components/FoodItems";
import CategoryCard from "../../components/CategoryCards";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  EvilIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CATEGORIES = [
  { name: "Burger", image: require("../../assets/burger.png") },
  { name: "Taco", image: require("../../assets/taco.png") },
  { name: "Drink", image: require("../../assets/drink.png") },
  { name: "Pizza", image: require("../../assets/pizza.png") },
];

const FOOD_ITEMS = [
  {
    title: "Buffalo Burger",
    image: require("../../assets/burgers/BuffaloBurger.png"),
    price: 17820,
    distance: "190m",
    rating: "4.5",
  },
  {
    title: "BBQ Burger",
    image: require("../../assets/burgers/BBQBurger.png"),
    price: 12260,
    distance: "120m",
    rating: "4.9",
  },
  {
    title: "Beef Burger",
    image: require("../../assets/burgers/BeefBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Chicken Burger",
    image: require("../../assets/burgers/ChickenBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Crispy Chicken Burger",
    image: require("../../assets/burgers/CrispyChickenBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Fish Burger",
    image: require("../../assets/burgers/FishBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Hawaiian BBQ Burger",
    image: require("../../assets/burgers/HawaiianBBQBurger.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "Mexican Zinger Burger",
    image: require("../../assets/burgers/MexicanZingerBurger.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("../../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("../../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("../../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("../../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("../../assets/burgers/burger1.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("../../assets/burgers/burger2.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
  {
    title: "Small Size Burger",
    image: require("../../assets/burgers/burger3.png"),
    price: 9170,
    distance: "80m",
    rating: "3.2",
  },
  {
    title: "King Size Burger",
    image: require("../../assets/burgers/burger4.png"),
    price: 20620,
    distance: "590m",
    rating: "5.0",
  },
];

export default function Menu() {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={FOOD_ITEMS}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item, index }) => (
          <FoodItem
            title={item.title}
            image={item.image}
            price={item.price}
            distance={item.distance}
            rating={item.rating}
          />
        )}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <ImageBackground
              source={require("../../assets/background.png")}
              resizeMode="cover"
              style={styles.foodBanner}
            >
              {/* Top Banner View */}

              <View>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>Your Location</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="white"
                  />
                </View>
                <View style={styles.cityContainer}>
                  <Ionicons name="location-outline" size={24} color="white" />
                  <Text style={styles.cityText}>Manchester</Text>
                </View>

                {/* Top navigation icons */}

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
              <View>
                <Text style={styles.lowerText} numberOfLines={2}>
                  Provide the best food for you
                </Text>
              </View>
            </ImageBackground>
            {/* Category Text */}
            <View style={styles.categoryText}>
              <Text style={styles.findCategoryText}>Find by category</Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>
            {/* Category Cards */}
            <View style={styles.categoryImages}>
              {CATEGORIES.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  name={cat.name}
                  image={cat.image}
                />
              ))}
            </View>
          </View>
        }
        ListFooterComponent={
          <View
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "yellow",
            }}
          ></View>
        }
      />

      {/* Status Bar configuration */}
      <StatusBar style="light" />
    </View>
  );
}

{
  /* Style Sheet */
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fcf1d6",
  },

  foodBanner: {
    height: windowHeight * 0.38,
    width: "100%",
  },

  categoryImages: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    rowGap: 16,
    marginBottom: 10,
  },

  locationContainer: {
    paddingTop: 50,
    paddingLeft: 30,
    flexDirection: "row",
    gap: 5,
  },

  cityContainer: {
    marginTop: 2,
    marginLeft: 24,
    flexDirection: "row",
    gap: 5,
  },

  locationText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "400",
  },

  cityText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  searchBell: {
    position: "absolute",
    top: 50,
    right: 24,
    flexDirection: "row",
    gap: 12,
  },

  iconCircle: {
    width: 44,
    aspectRatio: 1, // 👈 guarantees square
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  lowerText: {
    color: "white",
    fontSize: 38,
    fontWeight: "600",
    marginTop: 20,
    paddingHorizontal: 20,
    flexShrink: 1,
  },

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

  foodList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "red",
  },
});
