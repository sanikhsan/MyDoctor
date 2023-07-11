import { Image, StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";
import { DummyDoctor2 } from "../assets/dummy";

export default function DoctorList() {
  let text = "Tampilan isi dari pesan secara singkat / terpotong";
  let result = text.slice(0, 35);
  return (
    <View style={styles.profile}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Nama Dokter</Text>
        <Text style={styles.message}>{result}...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    marginRight: 12,
  },
  name: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
  message: {
    color: "#7D8797",
    fontSize: 16,
    fontFamily: fonts.Nunito[300],
  },
});
