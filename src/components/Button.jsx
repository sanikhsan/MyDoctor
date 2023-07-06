import { Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";

export default function Button({ label, type, onPress }) {
  return (
    <View style={styles.container(type)}>
      <Pressable onPress={onPress}>
        <Text style={styles.text(type)}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "primary" ? "#0BCAD4" : "white",
    borderRadius: 10,
  }),
  text: (type) => ({
    color: type === "primary" ? "white" : "black",
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.Nunito[600],
    paddingVertical: 10,
  }),
});
