import { Stack } from "expo-router";
import { fonts } from "../src/utils/fonts";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          fontFamily: fonts.Nunito[600],
          fontSize: 24,
        },
        headerShadowVisible: false,
      }}
    />
  );
}
