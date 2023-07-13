import { Image, StyleSheet, Text, View } from "react-native";
import { fonts } from "../utils/fonts";
import { DummyDoctor2 } from "../assets/dummy";

export default function ChatItemDoctor() {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={DummyDoctor2} />
      <View style={styles.content}>
        <Text style={styles.chat}>
          Oh tentu saja tidak karena jeruk itu sangat sehat...
        </Text>
        <Text style={styles.date}>4.25 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  content: {
    padding: 12,
    marginLeft: 7,
    marginBottom: 20,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: "80%",
    backgroundColor: "#0BCAD4",
  },
  chat: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: fonts.Nunito[400],
  },
  date: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: fonts.Nunito[400],
    marginTop: 8,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginLeft: 16,
    alignSelf: "flex-end",
  },
});
