import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconCatUmum } from "../assets/icons";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function DoctorCategory({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconCatUmum />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Background.bluesky,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginRight: 10,
    padding: 12,
  },
  label: {
    color: colors.Font.black,
    marginTop: 28,
    fontSize: 16,
    fontFamily: fonts.Nunito[300],
  },
  category: {
    color: colors.Font.black,
    fontSize: 16,
    fontFamily: fonts.Nunito[600],
  },
});
