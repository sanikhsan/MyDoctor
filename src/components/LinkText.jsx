import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

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
    color: colors.Font.gray,
    fontFamily: fonts.Nunito[400],
  },
});
