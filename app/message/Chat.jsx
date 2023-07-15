import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderMessage from "../../src/components/HeaderMessage";
import ChatInput from "../../src/components/ChatInput";
import { fonts } from "../../src/utils/fonts";
import ChatItemUser from "../../src/components/ChatItemUser";
import ChatItemDoctor from "../../src/components/ChatItemDoctor";
import { colors } from "../../src/utils/colors";

export default function ChatPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFF" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          header: ({ navigation }) => {
            return (
              <HeaderMessage
                type={"chat"}
                name={"Nama Dokter"}
                profession={"Kategori Dokter"}
                onPress={navigation.goBack}
              />
            );
          },
        }}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.date}>Senin, 20 Maret 2023</Text>
        <ChatItemUser />
        <ChatItemDoctor />
        <ChatItemUser />
        <ChatItemDoctor />
        <ChatItemUser />
        <ChatItemDoctor />
        <ChatItemUser />
        <ChatItemDoctor />
      </ScrollView>
      <ChatInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background.white,
  },
  content: {
    marginTop: 110,
    flex: 1,
  },
  date: {
    color: colors.Font.gray,
    fontSize: 14,
    textAlign: "center",
    fontFamily: fonts.Nunito[400],
    marginVertical: 20,
  },
});
