import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";
import Gap from "../src/components/Gap";
import Button from "../src/components/Button";
import { fonts } from "../src/utils/fonts";
import { BgStarted, IconApp } from "../src/assets/illustration";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../src/utils/colors";

// Get Starter Page
export default function App() {
  return (
    <ImageBackground source={BgStarted} style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView>
        <Image source={IconApp} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </SafeAreaView>
      <SafeAreaView>
        <Link href="auth/SignUp" asChild>
          <Button label={"Get Started"} type={"primary"} />
        </Link>
        <Gap height={16} />
        <Link href="auth/SignIn" asChild>
          <Button label={"Sign In"} />
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.Background.white,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: colors.Font.white,
    marginTop: 91,
    fontFamily: fonts.Nunito[600],
  },
});
