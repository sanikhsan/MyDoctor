import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text } from "react-native";
import { IconApp } from "../../src/assets/illustration";
import InputGroup from "../../src/components/InputGroup";
import Gap from "../../src/components/Gap";
import LinkText from "../../src/components/LinkText";
import Button from "../../src/components/Button";
import { fonts } from "../../src/utils/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../src/utils/colors";

// Sign In Page
export default function SignInPage() {
  return (
    <SafeAreaView style={styles.container}>
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
      <Link replace href={"main/Home"} asChild>
        <Button label={"Sign In"} type={"primary"} />
      </Link>
      <Gap height={30} />
      <Link href={"auth/SignUp"} asChild>
        <LinkText style={styles.linkText} label={"Create New Account"} />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.Background.white,
    flex: 1,
  },
  text: {
    color: colors.Font.black,
    fontSize: 28,
    paddingVertical: 40,
    fontFamily: fonts.Nunito[600],
  },
  linkText: {
    fontSize: 20,
    textAlign: "center",
  },
});
