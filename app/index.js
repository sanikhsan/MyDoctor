import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { Link, Stack } from "expo-router";
import Button from "../src/components/Button";
import Gap from "../src/components/Gap";

const Logo = require("../src/assets/illustration/icon.png");
const BackgroundImage = require("../src/assets/illustration/bg-getstarted.png");

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Link href="/signup" asChild>
          <Button label={"Get Started"} type={"primary"} />
        </Link>
        <Gap height={16} />
        <Link href="/signin" asChild>
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
  image: {
    width: 86,
    height: 75,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginTop: 91,
    fontFamily: "Nunito_600SemiBold",
  },
});
