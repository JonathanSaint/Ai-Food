import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatModal({
  image,
  username,
  recentMessage,
  timeStamp,
  readStatus,
  statusNumber,
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
        <View style={styles.statusNumberContainer}>
          <Text style={styles.statusNumber}>{statusNumber}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatsContainer: {
    flexDirection: "row",
    width: "90%",
    height: "15%",
    // justifyContent: "space-between",
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

  statusNumber: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },

  statusNumberContainer: {
    backgroundColor: "orange",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
