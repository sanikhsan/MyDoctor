import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyDoctor1 } from "../assets/dummy";
import { fonts } from "../utils/fonts";
import { IconStar } from "../assets/icons";
import { colors } from "../utils/colors";

export default function RatedDoctor({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}
    >
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.label}>Nama Dokter</Text>
        <Text style={styles.profession}>Kategori Dokter</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  profile: {
    flex: 1,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    marginRight: 12,
  },
  label: {
    color: colors.Font.black,
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  profession: {
    color: colors.Font.gray,
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
  rating: {
    flexDirection: "row",
  },
});
