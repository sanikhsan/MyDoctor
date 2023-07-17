import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DefaultPhoto } from "../../src/assets/illustration";
import { IconAdd, IconRemove } from "../../src/assets/icons";
import Button from "../../src/components/Button";
import LinkText from "../../src/components/LinkText";
import { fonts } from "../../src/utils/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../src/utils/colors";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

// Sign Up Photo Route
export default function SignUpPhotoPage() {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(DefaultPhoto);

  const pickPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto({ uri: result.assets[0].uri });
      setHasPhoto(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Upload Photo",
        }}
      />
      <View style={styles.profile}>
        <TouchableOpacity style={styles.avatarBorder} onPress={pickPhoto}>
          <Image style={styles.avatar} source={photo} />
          {hasPhoto && <IconRemove style={styles.addAvatar} />}
          {!hasPhoto && <IconAdd style={styles.addAvatar} />}
        </TouchableOpacity>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.profession}>Jabatan</Text>
      </View>
      <View>
        {!hasPhoto && <Button label={"Upload and Continue"} disabled />}
        <Link replace href={"main/Home"} asChild>
          {hasPhoto && (
            <Button label={"Upload and Continue"} type={"primary"} />
          )}
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
    borderRadius: 110 / 2,
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
