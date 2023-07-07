import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { DefaultPhoto } from "../../src/assets/illustration";
import { IconAdd } from "../../src/assets/icons";
import Button from "../../src/components/Button";
import LinkText from "../../src/components/LinkText";
import { fonts } from "../../src/utils/fonts";

// Sign Up Photo Route
export default function SignUpPhoto() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Upload Photo",
        }}
      />
      <View style={styles.profile}>
        <View style={styles.avatarBorder}>
          <Image style={styles.avatar} source={DefaultPhoto} />
          <IconAdd style={styles.addAvatar} />
        </View>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.profession}>Jabatan</Text>
      </View>
      <View>
        <Button label={"Upload and Continue"} type={"primary"} />
        <LinkText style={styles.link} label={"Skip for this"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
  avatar: {
    height: 110,
    width: 110,
  },
  avatarBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  addAvatar: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  link: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 30,
    padding: 40,
  },
  name: {
    color: "#112340",
    fontSize: 28,
    fontFamily: fonts.Nunito[600],
    paddingTop: 26,
    textAlign: "center",
  },
  profession: {
    color: "#7D8797",
    fontSize: 22,
    fontFamily: fonts.Nunito[400],
    textAlign: "center",
    paddingTop: 4,
    paddingBottom: 88,
  },
  profile: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});