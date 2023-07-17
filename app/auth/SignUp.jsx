import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import InputGroup from "../../src/components/InputGroup";
import Gap from "../../src/components/Gap";
import Button from "../../src/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../src/utils/colors";
import useForm from "../../src/utils/useForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { MyFirebase } from "../../src/config/firebase";
import Loading from "../../src/components/Loading";
import { useState } from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import { getData, storeData } from "../../src/utils/localStorage";

// Sign Up Page
export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullname: "",
    profession: "",
    email: "",
    password: "",
  });

  const auth = getAuth(MyFirebase);
  const db = getDatabase(MyFirebase);
  const onSubmit = () => {
    setLoading(true);
    // console.log(form);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((success) => {
        console.log(success);
        setForm("reset");
        setLoading(false);
        const data = {
          fullname: form.fullname,
          profession: form.profession,
          email: form.email,
        };
        set(ref(db, "users/" + success.user.uid), data);

        storeData("user", data);
      })
      .catch((error) => {
        errorMessage = "";
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "That email address is already in use!";
        }

        if (error.code === "auth/invalid-email") {
          errorMessage = "That email address is invalid!";
        }
        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.Background.red,
        });
        setLoading(false);
      });
  };

  return (
    <>
      <FlashMessage position="top" />
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <StatusBar style="auto" />
          <Stack.Screen
            options={{
              title: "Daftar Akun",
            }}
          />

          <InputGroup
            label={"Nama Lengkap"}
            value={form.fullname}
            onChangeText={(value) => setForm("fullname", value)}
          />
          <Gap height={24} />
          <InputGroup
            label={"Pekerjaan"}
            value={form.profession}
            onChangeText={(value) => setForm("profession", value)}
          />
          <Gap height={24} />
          <InputGroup
            label={"Email Address"}
            value={form.email}
            onChangeText={(value) => setForm("email", value)}
          />
          <Gap height={24} />
          <InputGroup
            label={"Password"}
            value={form.password}
            onChangeText={(value) => setForm("password", value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Link href={"auth/SignUpPhoto"} asChild>
            <Button label={"Continue"} type={"primary"} onPress={onSubmit} />
          </Link>
          {/* <Button label={"Continue"} type={"primary"} onPress={onSubmit} /> */}
        </SafeAreaView>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.Background.white,
  },
});
