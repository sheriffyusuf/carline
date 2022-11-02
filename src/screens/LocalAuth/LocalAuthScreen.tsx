import {
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";

import * as LocalAuthentication from "expo-local-authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import BiometricSvg from "../../components/Svg/BiometricSvg";
import FaceIdSvg from "../../components/Svg/FaceIdSvg";
import { RootStackScreenProps } from "../../navigation/types";

export default function LocalAuthScreen({
  navigation,
}: RootStackScreenProps<"LocalAuth">) {
  const [biometricType, setBiometricType] = React.useState("");
  const [localAuthtype, setLocalAuthType] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      const localAuthTypes: LocalAuthentication.AuthenticationType[] =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      if (localAuthTypes.includes(1)) {
        setLocalAuthType(1);
        setBiometricType("Fingerprint");
      } else if (localAuthTypes.includes(2)) {
        setLocalAuthType(2);
        setBiometricType("Face ID");
      } else if (localAuthTypes.includes(3)) {
      }
    })();
  }, []);
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" mx={6} mt={24} pb={8}>
        <Center>{localAuthtype == 1 ? <BiometricSvg /> : <FaceIdSvg />}</Center>
        <VStack space={4} mt={6} alignItems="center">
          <Heading size="lg">Use {biometricType} to login?</Heading>
          <Text color="gray.500" textAlign="center">
            You can use {biometricType} to access your account, so you won’t
            need to type your password each time.
          </Text>
        </VStack>
        <Spacer />
        <VStack space={4} mt={7}>
          <Button onPress={() => navigation.navigate("NewPassword")}>
            {biometricType}
          </Button>
          <Button variant="poutline" onPress={() => navigation.goBack()}>
            No, Thanks
          </Button>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
