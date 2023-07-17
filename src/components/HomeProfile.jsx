import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DummyUser } from "../assets/dummy";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function HomeProfile({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}
    >
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.profession}>Jabatan Pengguna</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
    marginRight: 12,
  },
  name: {
    color: colors.Font.black,
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  profession: {
    color: colors.Font.gray,
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
});
