import { Image, StyleSheet, Text, View } from "react-native";
import { DummyNews3 } from "../assets/dummy";
import { fonts } from "../utils/fonts";

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
    borderBottomColor: "#7D8797",
  },
  wrapper: {
    flex: 1,
  },
  label: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
  },
  time: {
    color: "#7D8797",
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
  thumbnail: {
    borderRadius: 11,
    width: 100,
    height: 80,
  },
});
