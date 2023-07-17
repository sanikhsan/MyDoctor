import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.Background.black} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background.grayTransparent,
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 10,
    color: colors.Font.black,
    fontSize: 24,
    fontFamily: fonts.Nunito[800],
  },
});
