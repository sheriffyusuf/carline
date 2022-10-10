import {
  Button,
  Flex,
  Heading,
  Image,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/logo.png";
import { RootStackScreenProps } from "../../navigation/types";

export default function GetStartedScreen({
  navigation,
}: RootStackScreenProps<"GetStarted">) {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "#4038ff" }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" ml={6} mt={8}>
        <Image source={logo} alt="logo" />
        <VStack width={width * 0.6} space="3" mt={10}>
          <Heading fontSize="3xl" color="white" lineHeight="36">
            Let’s get started
          </Heading>
          <Text color="gray.400" fontSize="md">
            Sign up or login to see what's happening near you
          </Text>
        </VStack>
        <VStack mr={6}>
          <Button variant="primary">Next</Button>
          <Button variant="outline" color="white">
            Next
          </Button>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
