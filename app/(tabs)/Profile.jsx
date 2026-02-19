import {
  View,
  StyleSheet,
  Text,
  Pressable,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import {
  Ionicons,
  Feather,
  AntDesign,
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileOptions from "../../components/ProfileOptions";

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View style={styles.profileImageContainer}>
          <View style={styles.profilePictureImage}>
            <Image
              source={require("./../../assets/people/person1.png")}
              style={styles.profileImage}
            />
            <Pressable style={styles.cameraIcon}>
              <FontAwesome6 name="camera" size={20} color="orange" />
            </Pressable>
          </View>
        </View>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.name}>Albert Stevano Bajefski</Text>
          <Text style={styles.email}>Albertstevano@gmail.com</Text>
        </View>
        <View style={styles.recentOrdersContainer}>
          <View style={styles.categoryText}>
            <Text style={styles.myOrdersText}>My Orders</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
          <View>
            <View style={styles.orderIdDeliveryContainer}>
              <View style={styles.orderIdContainer}>
                <Text style={styles.orderIdText}>Order ID</Text>
                <Text style={styles.orderId}>888333777</Text>
              </View>
              <Pressable style={styles.deliveryButton}>
                <Text style={styles.deliveryText}>In Delivery</Text>
              </Pressable>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.orderTypeContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("./../../assets/burgers/burger1.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.orderDetailContainer}>
                <Text style={styles.orderName}>Burger With Meat</Text>
                <Text style={styles.orderPrice}>UGX 12,230</Text>
              </View>
              <View style={styles.numberOfItemsContainer}>
                <Text>14 items</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine2}></View>
        <View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText}>Profile</Text>
          </View>
          <View style={styles.miniContainer}>
            <ProfileOptions
              title={"Personal Data"}
              mainIcon={
                <Ionicons name="person-outline" size={24} color="black" />
              }
              arrowIcon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color="black"
                />
              }
            />
            <ProfileOptions
              title={"Settings"}
              mainIcon={
                <Ionicons name="settings-outline" size={24} color="black" />
              }
              arrowIcon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color="black"
                />
              }
            />
            <ProfileOptions
              title={"Extra Card"}
              mainIcon={
                <FontAwesome name="credit-card" size={24} color="black" />
              }
              arrowIcon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color="black"
                />
              }
            />
          </View>
          <View style={styles.supportTextContainer}>
            <Text style={styles.supportText}>Suggest</Text>
          </View>
          <View style={styles.miniContainer}>
            <Pressable onPress={() => router.push("/HelpCenter")}>
              <ProfileOptions
                title={"Help Center"}
                link={<Link href={"/HelpCenter"} />}
                mainIcon={
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color="black"
                  />
                }
                arrowIcon={
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={40}
                    color="black"
                  />
                }
              />
            </Pressable>
            <ProfileOptions
              title={"Request Account Deletion"}
              mainIcon={
                <FontAwesome6 name="trash-can" size={24} color="black" />
              }
              arrowIcon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color="black"
                />
              }
            />
            <ProfileOptions
              title={"Add another Account"}
              mainIcon={<AntDesign name="user-add" size={24} color="black" />}
              arrowIcon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={40}
                  color="black"
                />
              }
            />
          </View>
          <Pressable style={styles.signOutButton}>
            <Feather name="log-out" size={24} color="red" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Status Bar configuration */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fdfafa",
  },

  miniContainer: {
    flexDirection: "column",
    // justifyContent: "space-between",
    gap: 15,
    marginBottom: 15,
  },

  headerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },

  profileImageContainer: {
    alignItems: "center",
    marginBottom: 15,
    marginTop: 20,
  },

  profilePictureImage: {
    position: "relative",
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: "cover",
  },

  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  nameEmailContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
  },

  email: {
    fontSize: 15,
    fontWeight: "200",
  },

  recentOrdersContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 15,
    borderWidth: 0.18,
    borderColor: "#d7d7e2",
  },

  categoryText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  myOrdersText: {
    fontWeight: "700",
    fontSize: 20,
  },

  seeAllText: {
    color: "#ff8800",
    fontSize: 17,
    fontWeight: "500",
  },

  horizontalLine: {
    height: 1,
    width: "100%",
    marginVertical: "2%",
    backgroundColor: "#d7d7e2",
  },

  horizontalLine2: {
    height: 1,
    width: "90%",
    marginVertical: "4%",
    marginHorizontal: "5%",
    backgroundColor: "#d7d7e2",
  },

  image: {
    width: "20%",
    height: "20%",
  },

  orderIdDeliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderIdContainer: {
    gap: 6,
    flexDirection: "row",
  },

  orderIdText: {
    color: "gray",
  },

  orderId: {
    fontWeight: "600",
  },

  deliveryButton: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 30,
    width: 100,
    height: 40,
  },

  deliveryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },

  orderTypeContainer: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },

  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  orderDetailContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 6,
  },

  orderName: {
    fontSize: 16,
    fontWeight: "700",
  },

  orderPrice: {
    color: "orange",
    fontWeight: "800",
  },

  numberOfItemsContainer: {
    backgroundColor: "#f3f1f1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "600",
  },

  profileTextContainer: {
    marginHorizontal: 15,
    marginBottom: 18,
  },

  supportText: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "600",
  },

  supportTextContainer: {
    marginHorizontal: 15,
    marginBottom: 18,
  },

  signOutButton: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#d7d7e2",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    alignSelf: "center",
  },

  signOutText: {
    color: "#ff0000",
    fontSize: 18,
    fontWeight: "600",
  },
});
