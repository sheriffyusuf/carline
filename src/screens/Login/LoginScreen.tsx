import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Pressable,
  Spacer,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OutlineButton from "../../components/OutlineButton";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" mx={6} mt={12} pb={8}>
        <VStack space={2}>
          <Heading size="xl">Sign in to Carline</Heading>
          <Text color="gray.500" fontSize="md">
            Welcome back! Please enter yout details.
          </Text>
        </VStack>
        <VStack space={4} mt={6}>
          <Input
            size="lg"
            variant="filled"
            placeholder="Email"
            InputLeftElement={
              <Icon
                as={TablerIcons}
                name="mail"
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
            size="lg"
            variant="filled"
            placeholder="Password"
            InputLeftElement={
              <Icon
                as={TablerIcons}
                name="lock"
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <HStack space={1}>
            <Text>Forgot Password?</Text>
            <Pressable>
              <Text color="primary.500" fontWeight="bold">
                Reset it
              </Text>
            </Pressable>
          </HStack>
        </VStack>
        <VStack space={4} mt={7}>
          <Button>Sign In</Button>
          <OutlineButton
            iconAs={Ionicons}
            iconName="ios-logo-google"
            iconColor="gray.900"
          >
            Continue with Google
          </OutlineButton>

          <OutlineButton
            iconAs={Ionicons}
            iconName="logo-apple"
            iconColor="gray.900"
          >
            Continue with Apple
          </OutlineButton>
        </VStack>
        <Spacer />
        <HStack space={1} justifyContent="center">
          <Text>Dont have an account?</Text>
          <Pressable>
            <Text color="primary.500" fontWeight="bold">
              Sign Up
            </Text>
          </Pressable>
        </HStack>
      </Flex>
    </SafeAreaView>
  );
}
