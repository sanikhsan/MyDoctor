import { Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

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
    backgroundColor:
      type === "primary" ? colors.Button.green : colors.Button.white,
    borderRadius: 10,
  }),
  text: (type) => ({
    color: type === "primary" ? colors.Font.white : colors.Font.black,
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.Nunito[600],
    paddingVertical: 10,
  }),
});
