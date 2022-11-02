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
import { useWindowDimensions } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import OTPInputs from "../../components/Otp/OTPInputs";
import EmailSvg from "../../components/States/EmailSvg";
import { RootStackScreenProps } from "../../navigation/types";

export default function OtpScreen({ navigation }: RootStackScreenProps<"Otp">) {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" mx={6} mt={24} pb={8}>
        <Center>
          <EmailSvg />
        </Center>
        <VStack space={4} mt={6} alignItems="center">
          <Heading size="lg">Almost there!</Heading>
          <Text color="gray.500" textAlign="center">
            Check your email inbox and input the verification code to verify
            your account
          </Text>
          <OTPInputs
            inputsStyle={{
              borderColor: "transparent",
              backgroundColor: "#f3f4f6",
              borderRadius: 16,
              fontFamily: "Urbanist_500Medium",
            }}
          />
        </VStack>
        <Spacer />
        <VStack space={4} mt={7}>
          <Button onPress={() => navigation.navigate("LocalAuth")}>
            Continue
          </Button>
          <Button variant="poutline">Resend Code</Button>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
