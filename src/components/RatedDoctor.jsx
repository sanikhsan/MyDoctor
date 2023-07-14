import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyDoctor1 } from "../assets/dummy";
import { fonts } from "../utils/fonts";
import { IconStar } from "../assets/icons";

export default function RatedDoctor({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  profession: {
    color: "#7D8797",
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
  rating: {
    flexDirection: "row",
  },
});
