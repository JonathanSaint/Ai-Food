import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={18}
          color="#d1c9c9"
          style={styles.searchPlaceholder}
        />
        <TextInput placeholder="Search" style={styles.searchPlaceholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  searchPlaceholder: {},
});
