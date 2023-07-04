import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";

export default function Button({ label, type }) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container(type)}>
      <Pressable>
        <Text style={styles.text(type)}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingTop: 16,
    backgroundColor: type === "primary" ? "#0BCAD4" : "white",
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: (type) => ({
    color: type === "primary" ? "white" : "black",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Nunito_600SemiBold",
  }),
});
