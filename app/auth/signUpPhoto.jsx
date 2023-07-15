import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { DefaultPhoto } from "../../src/assets/illustration";
import { IconAdd } from "../../src/assets/icons";
import Button from "../../src/components/Button";
import LinkText from "../../src/components/LinkText";
import { fonts } from "../../src/utils/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../src/utils/colors";

// Sign Up Photo Route
export default function SignUpPhotoPage() {
  return (
    <SafeAreaView style={styles.container}>
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
        <Link replace href={"main/Home"} asChild>
          <Button label={"Upload and Continue"} type={"primary"} />
        </Link>
        <Link replace href={"main/Home"} asChild>
          <LinkText style={styles.link} label={"Skip for this"} />
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.Background.white,
  },
  avatar: {
    height: 110,
    width: 110,
  },
  avatarBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.Border.blur,
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
    color: colors.Font.black,
    fontSize: 28,
    fontFamily: fonts.Nunito[600],
    paddingTop: 26,
    textAlign: "center",
  },
  profession: {
    color: colors.Font.gray,
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
