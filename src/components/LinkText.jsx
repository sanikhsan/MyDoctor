import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "../utils/fonts";

export default function LinkText({ style, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#7D8797",
    fontFamily: fonts.Nunito[400],
  },
});
