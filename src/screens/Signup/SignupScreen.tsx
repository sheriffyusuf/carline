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
import GoogleIcon from "../../components/GoogleIcon";
import OutlineButton from "../../components/OutlineButton";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";

export default function SignupScreen({
  navigation,
}: RootStackScreenProps<"Signup">) {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" mx={6} mt={12} pb={8}>
        <VStack space={2}>
          <Heading size="xl">Sign up</Heading>
        </VStack>
        <VStack space={4} mt={6}>
          <Input
            size="lg"
            variant="filled"
            placeholder="Fullname"
            InputLeftElement={
              <Icon
                as={TablerIcons}
                name="user"
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
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
            type={showPassword ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={TablerIcons}
                name="lock"
                size={5}
                ml="3"
                color="muted.400"
              />
            }
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={TablerIcons}
                  name={showPassword ? "eye" : "eye-off"}
                  size={5}
                  mr={3}
                  color="muted.400"
                />
              </Pressable>
            }
          />
          <HStack space={1} flexWrap="wrap">
            <Text color="gray.500">By Signing up, you agree to our?</Text>
            <Pressable>
              <Text color="primary.500" fontWeight="bold">
                Terms of Service
              </Text>
            </Pressable>
            <Text color="gray.500">and</Text>
            <Pressable>
              <Text color="primary.500" fontWeight="bold">
                Privacy Policy
              </Text>
            </Pressable>
          </HStack>
        </VStack>
        <VStack space={4} mt={7}>
          <Button onPress={() => navigation.navigate("Otp")}>Sign Up</Button>
          <OutlineButton iconElement={<GoogleIcon />}>
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
          <Text>Already have an account?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text color="primary.500" fontWeight="bold">
              Sign In
            </Text>
          </Pressable>
        </HStack>
      </Flex>
    </SafeAreaView>
  );
}
