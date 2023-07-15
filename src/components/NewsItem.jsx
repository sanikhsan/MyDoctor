import { Image, StyleSheet, Text, View } from "react-native";
import { DummyNews3 } from "../assets/dummy";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function NewsItem({ style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>Today</Text>
      </View>
      <Image source={DummyNews3} style={styles.thumbnail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.Border.gray,
  },
  wrapper: {
    flex: 1,
  },
  label: {
    color: colors.Font.black,
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  time: {
    color: colors.Font.gray,
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
  thumbnail: {
    borderRadius: 11,
    width: 100,
    height: 80,
  },
});
