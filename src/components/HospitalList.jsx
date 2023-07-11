import { Image, StyleSheet, Text, View } from "react-native";
import { DummyHospital2 } from "../assets/dummy";
import { fonts } from "../utils/fonts";

export default function HospitalList() {
  return (
    <View style={styles.list}>
      <Image source={DummyHospital2} style={styles.image} />
      <View>
        <Text style={styles.name}>Nama Rumah Sakit Terdekat</Text>
        <Text style={styles.address}>Detail Alamat Rumah Sakit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 80,
    marginRight: 16,
    borderRadius: 16,
  },
  name: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
    maxWidth: 151,
  },
  address: {
    color: "#7D8797",
    fontSize: 16,
    fontFamily: fonts.Nunito[300],
    paddingTop: 6,
  },
});
