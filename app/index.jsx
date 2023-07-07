import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Gap from "../src/components/Gap";
import Button from "../src/components/Button";
import { fonts } from "../src/utils/fonts";
import { BgStarted, IconApp } from "../src/assets/illustration";

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
      <View>
        <Image source={IconApp} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Link href="auth/signUp" asChild>
          <Button label={"Get Started"} type={"primary"} />
        </Link>
        <Gap height={16} />
        <Link href="/auth/signIn" asChild>
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