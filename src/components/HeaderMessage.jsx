import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IconWhiteArrow } from "../assets/icons";
import { fonts } from "../utils/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { DummyDoctor3 } from "../assets/dummy";

export default function HeaderMessage({
  label,
  onPress,
  name,
  profession,
  type,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPress}>
        <IconWhiteArrow />
      </Pressable>
      {type === "chat" ? (
        <View style={styles.chat}>
          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
          </View>
          <Image source={DummyDoctor3} style={styles.avatar} />
        </View>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "#112340",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
    flex: 1,
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  content: { flex: 1 },
  name: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
  },
  profession: {
    color: "#8092AF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
