import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../utils/fonts";
import { DummyDoctor2 } from "../assets/dummy";
import {
  IconDoc,
  IconLang,
  IconNextMessage,
  IconProfile,
  IconRating,
} from "../assets/icons";

export default function ItemList({ type, onPress, icon, name, desc }) {
  return (
    <TouchableOpacity style={styles.profile} onPress={onPress}>
      {icon === "language" && <IconLang style={styles.avatar} />}
      {icon === "profile" && <IconProfile style={styles.avatar} />}
      {icon === "rating" && <IconRating style={styles.avatar} />}
      {icon === "documentation" && <IconDoc style={styles.avatar} />}
      {!icon && <Image source={DummyDoctor2} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{desc.slice(0, 35)}</Text>
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
