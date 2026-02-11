import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  StatusBar,
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
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Chat List</Text>
          </View>
          <View style={styles.allMessageContainer}>
            <Text style={styles.allMessageText}>All Messages</Text>
          </View>
          <View style={styles.chatContainer}>
            <ChatModal
              username={"Geopart Etdsien"}
              image={require("./../../assets/people/person1.png")}
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
              statusNumber={6}
            />
            <ChatModal
              username={"Stevano Clirover"}
              image={require("./../../assets/people/person2.png")}
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
              statusNumber={3}
            />
            <ChatModal
              username={"Elisia Justin"}
              image={require("./../../assets/people/person3.png")}
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
              statusNumber={1}
            />
            <ChatModal
              username={"Stevano Clirover"}
              image={require("./../../assets/people/person2.png")}
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
              statusNumber={8}
            />
            <ChatModal
              username={"Elisia Justin"}
              image={require("./../../assets/people/person3.png")}
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
              statusNumber={2}
            />
            <ChatModal
              username={"Elisia Justin"}
              image={require("./../../assets/people/person3.png")}
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
              statusNumber={11}
            />
            <ChatModal
              username={"Elisia Justin"}
              image={require("./../../assets/people/person3.png")}
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
              statusNumber={5}
            />
          </View>
      </ScrollView>
        </ImageBackground>
      
      {/* Status Bar configuration */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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