import { Image, StyleSheet, Text, View } from "react-native";
import { DummyUser } from "../assets/dummy";
import { fonts } from "../utils/fonts";

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.profession}>Jabatan Pengguna</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
    marginRight: 12,
  },
  name: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  profession: {
    color: "#7D8797",
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
});
