import * as SplashScreen from "expo-splash-screen";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import { colors } from "./theme/colors";
import components from "./theme/components";
import { config, fonts, fontSizes } from "./theme/fonts";

// Define the config
const configuration = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  fontConfig: config,
  fonts,
  fontSizes,
  colors,
  components,
};

// extend the theme
export const theme = extendTheme(configuration);
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
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
