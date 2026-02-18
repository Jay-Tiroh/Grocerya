import CustomHeader from "@/components/general/CustomHeader";
import { Stack } from "expo-router";

type screen = {
  name: string;
  options: {
    goBack: boolean;
    infoBtn: boolean;
  };
};

const screens = [
  {
    name: "register",
    options: {
      goBack: false,
      infoBtn: true,
    },
  },
  {
    name: "location",
    options: {
      goBack: true,
      infoBtn: true,
    },
  },
  {
    name: "verify",
    options: {
      goBack: true,
      infoBtn: true,
    },
  },
  {
    name: "notifications",
    options: {
      goBack: true,
      infoBtn: true,
    },
  },
  {
    name: "category",
    options: {
      goBack: true,
      infoBtn: true,
    },
  },
];

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={{
            header: (props) => (
              <CustomHeader
                goBack={screen.options.goBack}
                infoBtn={screen.options.infoBtn}
                {...props}
              />
            ),
            headerStyle: { backgroundColor: "#fff" },
          }}
        />
      ))}
    </Stack>
  );
}
