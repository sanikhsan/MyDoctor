import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileItem from "../../src/components/ProfileItem";
import PhotoProfile from "../../src/components/PhotoProfile";
import Gap from "../../src/components/Gap";
import Button from "../../src/components/Button";
import { colors } from "../../src/utils/colors";

export default function DoctorProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen
        options={{
          title: "Profile",
        }}
      />
      <PhotoProfile
        name={"Nama Dokter"}
        profession={"Kategori Dokter"}
        female
      />
      <Gap height={10} />
      <ProfileItem label={"Alumnus"} value={"Universitas Indonesia, 2020"} />
      <ProfileItem
        label={"Tempat Praktik"}
        value={"Rumah Sakit Umum, Bandung"}
      />
      <ProfileItem label={"No. STR"} value={"0000116622081996"} />
      <Gap height={23} />
      <View style={styles.buttonWrapper}>
        <Button type={"primary"} label={"Start Consultation"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background.white,
  },
  buttonWrapper: {
    paddingTop: 7,
    paddingHorizontal: 40,
  },
});
