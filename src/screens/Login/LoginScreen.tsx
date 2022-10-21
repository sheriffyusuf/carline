import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Pressable,
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
        {/* <TablerIcons name="mail" size={50} color="red" /> */}
        {/* <Image source={logo} alt="logo" />
        <ZStack>
          <Image source={logo_transparent} alt="logo_transparent" ml={24} />
          <VStack width={width * 0.6} space="3" mt={10}>
            <Heading fontSize="3xl" color="white" lineHeight="36">
              Let’s get started
            </Heading>
            <Text color="gray.400" fontSize="md">
              Sign up or login to see what's happening near you
            </Text>
          </VStack>
          <Image source={car_three} alt="car_three" ml={10} mt={40} />
        </ZStack>
        <Spacer />
        <VStack mr={6} space={4}>
          <Button variant="primary">Next</Button>
          <OutlineButton
            iconAs={Ionicons}
            iconName="ios-logo-google"
            iconColor="white"
          >
            Continue with Google
          </OutlineButton>

          <OutlineButton
            iconAs={Ionicons}
            iconName="logo-apple"
            iconColor="white"
          >
            Continue with Apple
          </OutlineButton>
        </VStack> */}
      </Flex>
    </SafeAreaView>
  );
}
