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
import { colors } from "../../src/utils/colors";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar style="dark" backgroundColor="#FFF" />
          <Stack.Screen options={{ headerShown: false }} />
          <View style={styles.wrapper}>
            <Link href={"profile/UserProfile"} asChild>
              <HomeProfile />
            </Link>
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
            <Link href={"profile/DoctorProfile"} asChild>
              <RatedDoctor />
            </Link>
            <RatedDoctor />
            <RatedDoctor />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.titleLabel}>Good News</Text>
          </View>
          <NewsItem style={styles.wrapper} />
          <NewsItem />
          <NewsItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Background.black,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  main: {
    backgroundColor: colors.Background.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  titleLabel: {
    color: colors.Font.black,
    fontSize: 20,
    fontFamily: fonts.Nunito[700],
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 219,
  },
});
