import { StyleSheet, Text, TextInput, View } from "react-native";
import { fonts } from "../utils/fonts";

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
    color: "#7D8797",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
  input: {
    borderColor: "#E9E9E9",
    height: 45,
    fontSize: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
});
