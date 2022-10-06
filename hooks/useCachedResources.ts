import {
  Urbanist_100Thin,
  Urbanist_100Thin_Italic,
  Urbanist_200ExtraLight,
  Urbanist_200ExtraLight_Italic,
  Urbanist_300Light,
  Urbanist_300Light_Italic,
  Urbanist_400Regular,
  Urbanist_400Regular_Italic,
  Urbanist_500Medium,
  Urbanist_500Medium_Italic,
  Urbanist_600SemiBold,
  Urbanist_600SemiBold_Italic,
  Urbanist_700Bold,
  Urbanist_700Bold_Italic,
  Urbanist_800ExtraBold,
  Urbanist_800ExtraBold_Italic,
  Urbanist_900Black,
  Urbanist_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/urbanist";
//import { FontAwesome } from "@expo/vector-icons";
//import * as Font from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  let [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_100Thin,
    Urbanist_100Thin_Italic,
    Urbanist_200ExtraLight,
    Urbanist_200ExtraLight_Italic,
    Urbanist_300Light,
    Urbanist_300Light_Italic,
    Urbanist_400Regular,
    Urbanist_400Regular_Italic,
    Urbanist_500Medium_Italic,
    Urbanist_600SemiBold,
    Urbanist_600SemiBold_Italic,
    Urbanist_700Bold_Italic,
    Urbanist_800ExtraBold,
    Urbanist_800ExtraBold_Italic,
    Urbanist_900Black,
    Urbanist_900Black_Italic,
  });

  // React.useEffect(() => {
  //   // onAuthStateChanged returns an unsubscriber
  //   const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
  //     try {
  //       await (user ? setAuthUser(user) : setAuthUser(null));
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });

  //   // unsubscribe auth listener on unmount
  //   return unsubscribeAuth;
  // }, []);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          //     ...FontAwesome.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  /*  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]); */
  React.useEffect(() => {
    async function loaded() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLoadingComplete(true);
      }
    }
    loaded();
  }, [fontsLoaded]);

  return isLoadingComplete;
}
