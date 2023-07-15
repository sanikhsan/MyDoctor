import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import HeaderMessage from "../../src/components/HeaderMessage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemList from "../../src/components/ItemList";
import { colors } from "../../src/utils/colors";

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
          <ItemList
            type={"next"}
            onPress={onPress}
            name={"Nama Dokter"}
            desc={"Tampilan isi dari pesan secara singkat / terpotong"}
          />
        </Link>
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
        <ItemList
          type={"next"}
          name={"Nama Dokter"}
          desc={"Tampilan isi dari pesan secara singkat / terpotong"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Background.white,
    flex: 1,
  },
  content: {
    paddingTop: 90,
  },
});
