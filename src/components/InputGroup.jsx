import { StyleSheet, Text, TextInput, View } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";
import { useState } from "react";

export default function InputGroup({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  const [borderColor, setBorderColor] = useState(colors.Border.blur);

  const onFocus = () => {
    setBorderColor(colors.Border.active);
  };
  const onBlur = () => {
    setBorderColor(colors.Border.blur);
  };

  return (
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput
        style={Styles.input(borderColor)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  label: {
    paddingBottom: 6,
    color: colors.Font.gray,
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
  input: (borderColor) => ({
    borderColor: borderColor,
    height: 45,
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
  }),
});
