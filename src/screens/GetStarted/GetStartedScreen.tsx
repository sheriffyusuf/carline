import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  StatusBar,
  Text,
  VStack,
  ZStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import car_three from "../../../assets/get_started/car_three.png";
import logo_transparent from "../../../assets/get_started/logo_transparent.png";
import logo from "../../../assets/logo.png";
import OutlineButton from "../../components/OutlineButton";
import { RootStackScreenProps } from "../../navigation/types";

export default function GetStartedScreen({
  navigation,
}: RootStackScreenProps<"GetStarted">) {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "#4038ff" }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" ml={6} mt={8} pb={8}>
        <Image source={logo} alt="logo" />
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
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
          >
            Next
          </Button>
          <OutlineButton
            iconAs={Ionicons}
            iconName="ios-logo-google"
            iconColor="white"
            buttonVariant="outlined"
          >
            Continue with Google
          </OutlineButton>

          <OutlineButton
            iconAs={Ionicons}
            iconName="logo-apple"
            iconColor="white"
            buttonVariant="outlined"
          >
            Continue with Apple
          </OutlineButton>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
