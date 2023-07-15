import { StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function ProfileItem({ label, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.Border.gray,
  },
  content: { padding: 16 },
  label: {
    color: colors.Font.gray,
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
  value: {
    color: colors.Font.black,
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
});
