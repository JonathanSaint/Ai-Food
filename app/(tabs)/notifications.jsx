import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function notifications() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <AntDesign name="left" size={24} color="black" />
        </View>
        <View>
          <Text>Notifications</Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
