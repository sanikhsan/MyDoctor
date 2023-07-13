import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import HeaderMessage from "../../src/components/HeaderMessage";
import { ScrollView, StyleSheet } from "react-native";
import DoctorList from "../../src/components/DoctorList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListDoctorPage({ onPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          header: ({ navigation }) => {
            return (
              <HeaderMessage
                label={"Pilih Dokter Anak"}
                onPress={navigation.goBack}
              />
            );
          },
        }}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Link href={"message/Chat"} asChild>
          <DoctorList type={"next"} onPress={onPress} />
        </Link>
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
        <DoctorList type={"next"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    paddingTop: 90,
  },
});
