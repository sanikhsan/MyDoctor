import { Stack } from "expo-router";
import { fonts } from "../src/utils/fonts";
import { colors } from "../src/utils/colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.Background.white,
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
