import { Text, StyleSheet, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

export default function HelpCenter() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Hi, how we can help you?</Text>
      </View>
      <SafeAreaView style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={18}
          color="#d1c9c9"
          style={styles.searchPlaceholder}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchPlaceholder}
        ></TextInput>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headerText: {
    fontWeight: "600",
    fontSize: 20,
  },

  headerTextContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },

  searchBar: {
    width: "90%",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    alignSelf: "center",
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    paddingHorizontal: 20,
  },

  searchPlaceholder: {
    marginBottom: 10,
    fontSize: 20,
  },
});
