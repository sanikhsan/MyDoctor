import { StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";

export default function ChatItemUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.chat}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDFCFD",
    padding: 12,
    paddingRight: 18,
    marginRight: 16,
    marginBottom: 20,
    maxWidth: "70%",
    alignSelf: "flex-end",
    borderRadius: 10,
    borderBottomEndRadius: 0,
  },
  chat: {
    color: "#112340",
    fontSize: 18,
    fontFamily: fonts.Nunito[400],
  },
  date: {
    color: "#7D8797",
    alignSelf: "flex-end",
    fontSize: 15,
    fontFamily: fonts.Nunito[400],
    marginTop: 8,
  },
});
