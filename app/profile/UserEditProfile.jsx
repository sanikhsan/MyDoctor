import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PhotoProfile from "../../src/components/PhotoProfile";
import Gap from "../../src/components/Gap";
import InputGroup from "../../src/components/InputGroup";
import Button from "../../src/components/Button";

export default function UserEditProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen
        options={{
          title: "Edit Profile",
        }}
      />
      <Gap height={40} />
      <PhotoProfile editing />
      <Gap height={26} />
      <InputGroup label={"Full Name"} />
      <Gap height={24} />
      <InputGroup label={"Pekerjaan"} />
      <Gap height={24} />
      <InputGroup label={"Email Address"} />
      <Gap height={24} />
      <InputGroup label={"Password"} />
      <Gap height={40} />
      <Button type={"primary"} label={"Update Profile"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 40,
  },
});
