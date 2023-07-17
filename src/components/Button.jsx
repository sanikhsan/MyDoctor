import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function Button({ label, type, onPress, disabled }) {
  if (disabled) {
    return (
      <View style={styles.disabled}>
        <Text style={styles.textDisabled}>{label}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(type)}
      onPress={onPress}
    >
      <Text style={styles.text(type)}>{label}</Text>
    </TouchableOpacity>
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
  disabled: {
    backgroundColor: colors.Background.gray,
    borderRadius: 10,
  },
  textDisabled: {
    color: colors.Font.grayDisable,
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.Nunito[600],
    paddingVertical: 10,
  },
});
