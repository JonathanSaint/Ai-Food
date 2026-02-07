import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  FontAwesome6,
  Entypo,
  FontAwesome,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

export default function Notifications() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.dayText}>Today</Text>
      </View>
      <View style={styles.notificationsContainer}>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesome6 name="percentage" size={18} color="white" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>30% Special Discount!</Text>
            <Text style={styles.notificationSubtitle}>
              Special promotion only valid today
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon2}>
              <Entypo name="check" size={18} color="white" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>
              Your Order Has Been Taken by the Driver
            </Text>
            <Text style={styles.notificationSubtitle}>Recently!</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon3}>
              <FontAwesome name="close" size={18} color="white" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>
              Your Order Has Been Canceled
            </Text>
            <Text style={styles.notificationSubtitle}>19 Jun 2023</Text>
          </View>
        </View>
        <View>
          <Text style={styles.dayText2}>Yesterday</Text>
        </View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon4}>
              <Feather name="mail" size={24} color="black" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>35% Special Discount!</Text>
            <Text style={styles.notificationSubtitle}>
              Special promotion only valid today
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon4}>
              <Ionicons name="person-outline" size={24} color="black" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>
              Account Setup Successful!
            </Text>
            <Text style={styles.notificationSubtitle}>
              Special promotion only valid today
            </Text>
          </View>
        </View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesome6 name="percentage" size={18} color="white" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>
              Special Offer! 60% Off
            </Text>
            <Text style={styles.notificationSubtitle}>
              Special offer for new account, valid until 20 Nov 2022
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.notification}>
          <View style={styles.iconContainer}>
            <View style={styles.icon4}>
              <FontAwesome name="credit-card-alt" size={18} color="orange" />
            </View>
          </View>
          <View style={styles.notificationDetail}>
            <Text style={styles.notificationHeader}>Credit Card Connected</Text>
            <Text style={styles.notificationSubtitle}>
              Special promotion only valid today
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  dayText: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 8,
  },

  dayText2: {
    color: "#8e8e93",
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 8,
  },

  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  icon4: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  icon2: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  icon3: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#f3ecec",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  notification: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    gap: 14,
  },

  notificationHeader: {
    fontSize: 16,
    fontWeight: "700",
  },

  notificationSubtitle: {
    color: "#8e8e93",
    fontSize: 13,
    fontWeight: "300",
  },

  notificationDetail: {
    flex: 1,
    justifyContent: "center",
    gap: 6,
  },

  horizontalLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#d7d7e2",
  },
});
