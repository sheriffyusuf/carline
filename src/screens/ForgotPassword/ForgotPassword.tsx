import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Input,
  Spacer,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPasswordSvg from "../../components/States/ForgotPasswordSvg";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";

export default function ForgotPasswordScreen({
  navigation,
}: RootStackScreenProps<"ForgotPassword">) {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" mx={6} mt={24} pb={8}>
        <Center>
          <ForgotPasswordSvg />
        </Center>
        <VStack space={4} mt={6} alignItems="center">
          <Heading size="lg">Can't Sign In?</Heading>
          <Text color="gray.500" textAlign="center">
            Enter the email associated with your account, and Carline will send
            you a link to reset your password.
          </Text>
          <Input
            size="lg"
            variant="filled"
            placeholder="Email"
            InputLeftElement={
              <Icon
                as={TablerIcons}
                name="mail"
                size={5}
                ml="3"
                color="muted.400"
              />
            }
          />
        </VStack>
        <Spacer />
        <VStack space={4} mt={7}>
          <Button onPress={() => navigation.navigate("NewPassword")}>
            Reset Password
          </Button>
          <Button variant="poutline" onPress={() => navigation.goBack()}>
            Return to Sign In
          </Button>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
