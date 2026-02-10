import { View, Text, StyleSheet } from "react-native";

export default function HelpCenterTopic({ subtitle, title, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>{icon}</View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: "#8b8a8a",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 23,
  },
  subtitleContainer: {
    marginLeft: 42,
  },
});
