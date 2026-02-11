import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native";
import {
  FontAwesome,
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HelpCenterTopic from "./../components/HelpCenterTopics";

export default function HelpCenter() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Hi, how we can help you?</Text>
      </View>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={18}
          color="#d1c9c9"
          style={styles.searchPlaceholder}
        />
        <TextInput placeholder="Search" style={styles.searchPlaceholder} />
      </View>
      <View style={styles.topicContainer}>
        <HelpCenterTopic
          title={"General"}
          subtitle={"Basic question about Restate"}
          icon={<Octicons name="apps" size={30} color="indigo" />}
        />
        <HelpCenterTopic
          title={"Sellers"}
          subtitle={"All you need to know about selling your home to Restate"}
          icon={<AntDesign name="dollar" size={30} color="orange" />}
        />
        <HelpCenterTopic
          title={"Buyers"}
          subtitle={"Everything you need to know about buying with Restate"}
          icon={<AntDesign name="shopping-cart" size={30} color="red" />}
        />
        <HelpCenterTopic
          title={"Agents"}
          subtitle={
            "How buying agents and listing agents can work with Restate"
          }
          icon={
            <MaterialCommunityIcons name="account" size={30} color="blue" />
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topicContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fdfafa",
  },

  mainContainer: {
    flex: 1,
  },

  headerText: {
    fontWeight: "600",
    fontSize: 18,
  },

  headerTextContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },

  searchBar: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
});
