import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import Gap from "./src/components/Gap";

const Logo = require("./src/assets/illustration/icon.png");
const BackgroundImage = require("./src/assets/illustration/bg-getstarted.png");

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button label={"Get Started"} type={"primary"} />
        <Gap height={16} />
        <Button label={"Sign In"} />
      </View>
      {/* <StatusBar style="auto" /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
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
