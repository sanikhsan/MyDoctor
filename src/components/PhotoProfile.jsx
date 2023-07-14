import { Image, StyleSheet, Text, View } from "react-native";
import { DummyUser } from "../assets/dummy";
import { fonts } from "../utils/fonts";
import { IconFemale, IconMale, IconRemove } from "../assets/icons";

export default function PhotoProfile({
  editing,
  name,
  profession,
  male,
  female,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarBorder}>
        <Image source={DummyUser} style={styles.avatar} />
        {editing && <IconRemove style={styles.avatarRemove} />}
        {male && <IconMale style={styles.avatarRemove} />}
        {female && <IconFemale style={styles.avatarRemove} />}
      </View>
      {name && (
        <View style={styles.wrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  avatarBorder: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderColor: "#E9E9E9",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRemove: {
    position: "absolute",
    right: 3,
    bottom: 3,
  },
  wrapper: {
    alignItems: "center",
  },
  name: {
    color: "#112340",
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
    paddingTop: 16,
  },
  profession: {
    color: "#7D8797",
    fontSize: 20,
    fontFamily: fonts.Nunito[400],
  },
});
