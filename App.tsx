import * as SplashScreen from "expo-splash-screen";
import {
  extendTheme,
  HStack,
  NativeBaseProvider,
  Switch,
  Text,
  useColorMode,
} from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { config, fonts } from "./theme/fonts";

// Define the config
const configuration = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  fontConfig: config,
  fonts,
};

// extend the theme
export const theme = extendTheme({ configuration });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

SplashScreen.preventAutoHideAsync();
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
        {/*  <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <NativeBaseIcon />
            <Heading fontWeight={"normal"} size="lg">
              Welcome to NativeBase
            </Heading>
            <HStack space={2} alignItems="center">
              <Text>Edit</Text>
              <Box
                _web={{
                  _text: {
                    fontFamily: "monospace",
                    fontSize: "sm",
                  },
                }}
                px={2}
                py={1}
                _dark={{ bg: "blueGray.800" }}
                _light={{ bg: "blueGray.200" }}
              >
                App.jss
              </Box>
              <Text>and save to reload.</Text>
            </HStack>
            <Link href="https://docs.nativebase.io" isExternal>
              <Text color="primary.500" underline fontSize={"xl"}>
                Learn NativeBase
              </Text>
            </Link>
            <ToggleDarkMode />
          </VStack>
        </Center> */}
      </NativeBaseProvider>
    );
  }
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
