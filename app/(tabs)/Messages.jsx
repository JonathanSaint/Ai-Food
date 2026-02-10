import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ChatModal from "../../components/ChatModal";

export default function Messages() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../../assets/MessagePattern.png")}
        resizeMode="cover"
        style={styles.MessagePattern}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat List</Text>
        </View>
        <View style={styles.allMessageContainer}>
          <Text style={styles.allMessageText}>All Messages</Text>
        </View>
        <View style={styles.chatContainer}>
          <ChatModal
            username={"Geopart Etdsien"}
            image={require("./../../assets/person1.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"13:47"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Stevano Clirover"}
            image={require("./../../assets/person2.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Elisia Justin"}
            image={require("./../../assets/person3.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Stevano Clirover"}
            image={require("./../../assets/person2.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Elisia Justin"}
            image={require("./../../assets/person3.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Elisia Justin"}
            image={require("./../../assets/person3.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
          <ChatModal
            username={"Elisia Justin"}
            image={require("./../../assets/person3.png")}
            recentMessage={"Your Order Just Arrived!"}
            timeStamp={"11:23"}
            readStatus={
              <MaterialCommunityIcons
                name="check-all"
                size={18}
                color="orange"
                style={styles.readStatus}
              />
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f1f1",
  },

  MessagePattern: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  chatContainer: {
    flexDirection: "column",
    flex: 1,
    gap: 10,
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "30%",
    height: "20%",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },

  allMessageContainer: {
    width: "40%",
    height: "8%",
    marginHorizontal: "5%",
  },

  allMessageText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
});
