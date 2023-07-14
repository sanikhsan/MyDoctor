import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import PhotoProfile from "../../src/components/PhotoProfile";
import ItemList from "../../src/components/ItemList";
import Gap from "../../src/components/Gap";

export default function UserProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen
        options={{
          title: "Profile",
        }}
      />
      <Gap height={40} />
      <PhotoProfile name={"Nama Pengguna"} profession={"Profesi Pengguna"} />
      <Gap height={30} />
      <Link href={"profile/UserEditProfile"} asChild>
        <ItemList
          type={"next"}
          icon={"profile"}
          name={"Edit Profile"}
          desc={"Terakhir diperbaharui kemarin"}
        />
      </Link>
      <ItemList
        type={"next"}
        icon={"language"}
        name={"Language"}
        desc={"Tersedia 3 Bahasa"}
      />
      <ItemList
        type={"next"}
        icon={"rating"}
        name={"Give us Rate"}
        desc={"Berikan Feedback tentang aplikasi"}
      />
      <ItemList
        type={"next"}
        icon={"documentation"}
        name={"Help Center"}
        desc={"Baca panduan penggunaan aplikasi"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
