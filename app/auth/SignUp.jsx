import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import InputGroup from "../../src/components/InputGroup";
import Gap from "../../src/components/Gap";
import Button from "../../src/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

// Sign Up Page
export default function SignUpPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Daftar Akun",
        }}
      />

      <InputGroup label={"Nama Lengkap"} />
      <Gap height={24} />
      <InputGroup label={"Pekerjaan"} />
      <Gap height={24} />
      <InputGroup label={"Email Address"} />
      <Gap height={24} />
      <InputGroup label={"Password"} />
      <Gap height={40} />
      <Link href={"auth/SignUpPhoto"} asChild>
        <Button label={"Continue"} type={"primary"} />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
});
