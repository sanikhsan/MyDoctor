import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../src/utils/fonts";
import ItemList from "../../src/components/ItemList";
import { colors } from "../../src/utils/colors";

export default function MessagePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <ItemList
        name={"Nama Dokter"}
        desc={"Tampilan isi dari pesan secara singkat / terpotong"}
      />
      <ItemList
        name={"Nama Dokter"}
        desc={"Tampilan isi dari pesan secara singkat / terpotong"}
      />
      <ItemList
        name={"Nama Dokter"}
        desc={"Tampilan isi dari pesan secara singkat / terpotong"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: colors.Font.black,
    fontSize: 24,
    fontFamily: fonts.Nunito[600],
    paddingTop: 30,
    paddingLeft: 16,
  },
});
