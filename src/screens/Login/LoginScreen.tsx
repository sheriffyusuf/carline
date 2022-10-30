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

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = React.useState(false);
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
                ml="3"
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
          <HStack space={1}>
            <Text>Forgot Password?</Text>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text color="primary.500" fontWeight="bold">
                Reset it
              </Text>
            </Pressable>
          </HStack>
        </VStack>
        <VStack space={4} mt={7}>
          <Button>Sign In</Button>
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
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text color="primary.500" fontWeight="bold">
              Sign Up
            </Text>
          </Pressable>
        </HStack>
      </Flex>
    </SafeAreaView>
  );
}
