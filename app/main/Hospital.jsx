import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BgHospital } from "../../src/assets/illustration";
import { fonts } from "../../src/utils/fonts";
import { DummyHospital2 } from "../../src/assets/dummy";
import HospitalList from "../../src/components/HospitalList";

export default function HospitalPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground source={BgHospital} style={styles.background}>
        <Text style={styles.title}>Halaman Hospital</Text>
        <Text style={styles.subtitle}>3 tersedia</Text>
      </ImageBackground>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <HospitalList />
        <HospitalList />
        <HospitalList />
        <HospitalList />
        <HospitalList />
        <HospitalList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#112340",
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
    textAlign: "center",
  },
  subtitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: fonts.Nunito[300],
    textAlign: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: -20,
    paddingTop: 13,
  },
});
