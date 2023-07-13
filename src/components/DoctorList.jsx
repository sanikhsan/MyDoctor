import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../utils/fonts";
import { DummyDoctor2 } from "../assets/dummy";
import { IconNextMessage } from "../assets/icons";

export default function DoctorList({ type, onPress }) {
  let text = "Tampilan isi dari pesan secara singkat / terpotong";
  let result = text.slice(0, 35);
  return (
    <TouchableOpacity style={styles.profile} onPress={onPress}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>Nama Dokter</Text>
        <Text style={styles.message}>{result}...</Text>
      </View>
      {type === "next" && <IconNextMessage />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: { flex: 1 },
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
