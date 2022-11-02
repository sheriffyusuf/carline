import {
  Actionsheet,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Pressable,
  Spacer,
  StatusBar,
  Text,
  useDisclose,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";

import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import NewPasswordSvg from "../../components/States/NewPasswordSvg";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";

export default function NewPasswordScreen({
  navigation,
}: RootStackScreenProps<"NewPassword">) {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />

      <Flex flexDirection="column" flex="1" mx={6} mt={24} pb={8}>
        <Heading size="xl">{`Create your\nnew password`}</Heading>
        <Text color="gray.500" mt={2}>
          Your new password must be different from previous password.
        </Text>
        <VStack space={4} mt={6}>
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
          <Input
            size="lg"
            variant="filled"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
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
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
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
        </VStack>
        <Spacer />

        <Button onPress={onOpen}>Create New Password</Button>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Flex
              w="100%"
              px={4}
              flexDirection="column"
              alignItems="center"
              mt={4}
            >
              <NewPasswordSvg />
              <Heading size="lg">Password Changed</Heading>
              <Text color="gray.500" mt={2} textAlign="center">
                Awesome. You’ve successfully updated your password.
              </Text>
              <Button w="full" mt="12">
                Return to Sign In
              </Button>
            </Flex>
          </Actionsheet.Content>
        </Actionsheet>
      </Flex>
      {isOpen ? (
        <BlurView
          intensity={10}
          tint="light"
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        />
      ) : null}
    </SafeAreaView>
  );
}
