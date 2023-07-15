import { StyleSheet, Text, TextInput, View } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function InputGroup({ label }) {
  return (
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput style={Styles.input} />
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
  input: {
    borderColor: colors.Border.blur,
    height: 45,
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
});
