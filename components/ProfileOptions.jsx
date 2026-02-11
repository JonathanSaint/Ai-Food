import { View, Text, StyleSheet } from "react-native";

export default function ProfileOptions({ mainIcon, title, arrowIcon }) {
  return (
    <View>
      <View style={styles.profileOptionsContainer}>
        <View style={styles.profileOptions}>
          <View style={styles.iconContainer}>{mainIcon}</View>
          <View>
            <Text style={styles.profileTextOption}>{title}</Text>
          </View>
        </View>
        <View>{arrowIcon}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileTextOption: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "600",
  },

  profileOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },

  profileOptions: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5FF",
  },
});
