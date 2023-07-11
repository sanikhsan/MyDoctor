import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../src/utils/fonts";
import DoctorList from "../../src/components/DoctorList";

export default function MessagePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <DoctorList />
      <DoctorList />
      <DoctorList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: "#112340",
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
    paddingTop: 30,
    paddingLeft: 16,
  },
});
