import { StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";

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
    borderBottomColor: "#EEE",
  },
  content: { padding: 16 },
  label: {
    color: "#7D8797",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
  value: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
});
