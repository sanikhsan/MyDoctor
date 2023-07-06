import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import Button from "../components/Button";
import Gap from "../components/Gap";
import { fonts } from "../utils/fonts";

const Logo = require("../assets/illustration/icon.png");
const BackgroundImage = require("../assets/illustration/bg-getstarted.png");

export default function GetStartedPage() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Image source={Logo} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Link href="/signUp" asChild>
          <Button label={"Get Started"} type={"primary"} />
        </Link>
        <Gap height={16} />
        <Link href="/signIn" asChild>
          <Button label={"Sign In"} />
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 40,
    backgroundColor: "white",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginTop: 91,
    fontFamily: fonts.Nunito[600],
  },
});
