import { StyleSheet, Text, View } from "react-native";
import { IconCatUmum } from "../assets/icons";
import { fonts } from "../utils/fonts";

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <IconCatUmum />
      <Text style={styles.label}>Saya butuh</Text>
      <Text>dokter umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDFCFD",
    borderRadius: 10,
    alignSelf: "flex-start",
    marginRight: 10,
    padding: 12,
  },
  label: {
    color: "#112340",
    marginTop: 28,
    fontSize: 16,
    fontFamily: fonts.Nunito[300],
  },
  category: {
    color: "#112340",
    fontSize: 16,
    fontFamily: fonts.Nunito[600],
  },
});
