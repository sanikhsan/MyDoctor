import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MessagePage from "../message";

export default function HomeMessagePage() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen options={{ headerShown: false }} />
      <MessagePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#112340",
    flex: 1,
  },
});
