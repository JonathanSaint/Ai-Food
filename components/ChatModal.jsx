import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatModal({
  image,
  username,
  recentMessage,
  timeStamp,
  readStatus,
}) {
  return (
    <View style={styles.chatsContainer}>
      <View style={styles.profilePictureContainer}>
        <Image source={image} style={styles.profilePicture} />
      </View>
      <View style={styles.details}>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.recentMessage}>{recentMessage}</Text>
      </View>

      <View style={styles.timeStampContainer}>
        <Text style={styles.timeStamp}>{timeStamp}</Text>
        <View>{readStatus}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatsContainer: {
    flexDirection: "row",
    width: "90%",
    height: "21%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginLeft: "5%",
    borderRadius: 10,
    marginRight: "5%",
  },

  profilePictureContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginTop: 10,
    marginHorizontal: "1%",
  },

  profilePicture: {
    width: 50,
    height: 50,
    position: "absolute",
    top: -0.5,
    left: -1,
    borderRadius: 25,
  },

  timeStampContainer: {
    flexDirection: "column",
    gap: 4,
  },

  timeStamp: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },

  readStatus: {
    marginLeft: "20%",
  },

  details: {
    flexDirection: "column",
    gap: 7,
    marginRight: "20%",
  },

  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },

  recentMessage: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
});
