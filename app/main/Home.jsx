import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeProfile from "../../src/components/HomeProfile";
import DoctorCategory from "../../src/components/DoctorCategory";
import RatedDoctor from "../../src/components/RatedDoctor";
import NewsItem from "../../src/components/NewsItem";
import { fonts } from "../../src/utils/fonts";
import Gap from "../../src/components/Gap";

export default function HomePage() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <StatusBar style="dark" backgroundColor="#FFF" />
          <Stack.Screen options={{ headerShown: false }} />
          <View style={styles.wrapper}>
            <HomeProfile />
            <Text style={styles.titleLabel}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16} />
              <Link href={"message/ListDoctor"} asChild>
                <DoctorCategory />
              </Link>
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </ScrollView>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.titleLabel}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.titleLabel}>Good News</Text>
          </View>
          <NewsItem style={styles.wrapper} />
          <NewsItem />
          <NewsItem />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#112340",
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  main: {
    paddingVertical: 30,
    backgroundColor: "white",
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  titleLabel: {
    color: "#112340",
    fontSize: 20,
    fontFamily: fonts.Nunito[700],
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 219,
  },
});
