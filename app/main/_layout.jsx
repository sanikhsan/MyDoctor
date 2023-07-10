import { Stack, Tabs } from "expo-router";
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
  IconMessage,
  IconMessageActive,
} from "../../src/assets/icons";

export default function MainLayout() {
  return (
    <>
      {/* Menghilangkan Stack atau Header Root dari Layout Main */}
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0BCAD4",
          tabBarInactiveTintColor: "#495A75",
          tabBarStyle: {
            backgroundColor: "#112340",
            borderTopColor: "#112340",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={({ route }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => {
              let setIcon;
              if (route.name === "Home") {
                setIcon = focused ? <IconDoctorActive /> : <IconDoctor />;
              }
              return setIcon;
            },
          })}
        />
        <Tabs.Screen
          name="Message"
          options={({ route }) => ({
            tabBarLabel: "Message",
            tabBarIcon: ({ focused }) => {
              let setIcon;
              if (route.name === "Message") {
                setIcon = focused ? <IconMessageActive /> : <IconMessage />;
              }
              return setIcon;
            },
          })}
        />
        <Tabs.Screen
          name="Hospital"
          options={({ route }) => ({
            tabBarLabel: "Hospital",
            tabBarIcon: ({ focused }) => {
              let setIcon;
              if (route.name === "Hospital") {
                setIcon = focused ? <IconHospitalActive /> : <IconHospital />;
              }
              return setIcon;
            },
          })}
        />
      </Tabs>
    </>
  );
}
