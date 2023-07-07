import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from "expo-router";
import InputGroup from "../components/InputGroup";
import { IconApp } from "../assets/illustration";
import LinkText from "../components/LinkText";
import Button from "../components/Button";
import { fonts } from "../utils/fonts";
import Gap from "../components/Gap";

export default function SignInPage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image source={IconApp} style={styles.image} />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <InputGroup label={"Email Address"} />
      <Gap height={24} />
      <InputGroup label={"Password"} />
      <Gap height={10} />
      <LinkText label={"Forgot My Password"} />
      <Gap height={40} />
      <Button label={"Sign In"} type={"primary"} />
      <Gap height={30} />
      <Link href={"auth/signUp"} asChild>
        <LinkText style={styles.linkText} label={"Create New Account"} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 40,
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    color: "#112340",
    fontSize: 28,
    paddingVertical: 40,
    fontFamily: fonts.Nunito[600],
  },
  linkText: {
    fontSize: 20,
    textAlign: "center",
  },
});
