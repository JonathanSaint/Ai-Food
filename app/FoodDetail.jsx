import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import {
  Ionicons,
  Feather,
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import FoodItem from "../components/FoodItems";

const windowHeight = Dimensions.get("window").height;

export default function FoodDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ paddingBottom: 220 }}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("./../assets/burgers/BeefBurger.png")}
            style={styles.foodImage}
          />
          <View style={styles.changeImageContainer}>
            <View style={styles.changeImage}></View>
            <View style={styles.changeImage}></View>
            <View style={styles.changeImage}></View>
          </View>
        </View>
        <View style={styles.foodBio}>
          <Text style={styles.foodTitle}>Burger With Meat🍔</Text>
          <Text style={styles.foodPrice}>UGX 12,230</Text>
        </View>
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
            <Text style={styles.deliveryText}>4.5</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            Burger With Meat is a typical food from our restaurant that is much
            in demand by many people, this is very recommended for you.
          </Text>
        </View>
        <View style={styles.categoryText}>
          <Text style={styles.findCategoryText}>Recommended For You</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        {/* Food list */}

        <View style={styles.foodList}>
          <FoodItem
            title={"Ordinary Burgers"}
            image={require("./../assets/burgers/burger1.png")}
            price={"UGX 17,820"}
            distance={"190m"}
            rating={"4.5"}
          />
          <FoodItem
            title={"Burger With Meat"}
            image={require("./../assets/burgers/burger2.png")}
            price={"UGX 12,260"}
            distance={"120m"}
            rating={"4.9"}
          />
          <FoodItem
            title={"Small Size Burger"}
            image={require("./../assets/burgers/burger3.png")}
            price={"UGX 9,170"}
            distance={"80m"}
            rating={"3.2"}
          />
          <FoodItem
            title={"King Size Burger"}
            image={require("./../assets/burgers/burger4.png")}
            price={"UGX 20,620"}
            distance={"590m"}
            rating={"5.0"}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.incrementorContainer}>
          <View style={styles.incrementor}>
            <Pressable onPress={() => setQuantity(quantity - 1)}>
              <Entypo name="minus" size={28} color="black" />
            </Pressable>
            <Text style={styles.incrementorText}>{quantity}</Text>
            <Pressable onPress={() => setQuantity(quantity + 1)}>
              <Entypo name="plus" size={28} color="black" />
            </Pressable>
          </View>
          <View>
            <Text style={styles.incrementedPrice}>{quantity * 12230}</Text>
          </View>
        </View>
        <Pressable style={styles.cartButton}>
          <AntDesign name="shopping-cart" size={24} color="white" />
          <Text style={styles.cartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  foodImage: {
    alignSelf: "center",
    width: "100%",
    height: windowHeight * 0.5,
    borderRadius: 25,
  },

  imageWrapper: {
    position: "relative",
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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});
