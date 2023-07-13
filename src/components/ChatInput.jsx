import { StyleSheet, Text, TextInput, View } from "react-native";
import ButtonSend from "./ButtonSend";
import { fonts } from "../utils/fonts";

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Dokter" />
      <ButtonSend disabled />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    color: "#112340",
    paddingLeft: 14,
    marginRight: 10,
    paddingVertical: 14,
    backgroundColor: "#EDEEF0",
    borderRadius: 10,
    fontSize: 18,
    fontFamily: fonts.Nunito[400],
    maxHeight: 55,
  },
});
