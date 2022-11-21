import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  Pressable,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";
//@ts-ignore
import UilMapPin from "@iconscout/react-native-unicons/icons/uil-map-pin";

export default function LocationScreen({
  navigation,
}: RootStackScreenProps<"PickLocation">) {
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <Flex flexDirection="column" flex="1" px={6}>
        <Box bg="gray.100" borderRadius="2xl">
          <Input
            size="lg"
            variant="unstyled"
            bg="gray.100"
            placeholder="Search cars..."
            value="Clay Street, San Francisco"
            //   left={5}
            InputLeftElement={
              <Pressable onPress={() => true} py={4} pr={4}>
                <Icon
                  as={TablerIcons}
                  name="map-pin"
                  size={6}
                  ml={5}
                  color="gray.400"
                />
              </Pressable>
            }
          />
        </Box>
        <Flex
          p="4"
          borderWidth="1"
          borderColor="gray.200"
          borderRadius="2xl"
          mt={6}
          flexDir="row"
          alignItems="center"
        >
          <Box
            width={12}
            height={12}
            backgroundColor={"gray.900"}
            alignItems="center"
            borderRadius="full"
            justifyContent="center"
            mr={3}
          >
            <UilMapPin color="white" />
          </Box>
          <VStack>
            <Text fontSize="md" bold letterSpacing="0.4">
              Use my current location
            </Text>
            <Text
              fontWeight="medium"
              color="gray.500"
              letterSpacing="0.5"
              fontSize="sm"
            >
              Jackson Street, San Francisco
            </Text>
          </VStack>
          <Spacer />
          <Icon
            as={TablerIcons}
            name="chevron-right"
            size={6}
            color="gray.300"
          />
        </Flex>
        <HStack space={1} mt={4}>
          <Text bold fontSize="sm" color="gray.900" lineHeight="xl">
            50
          </Text>
          <Text fontSize="sm" color="gray.500" lineHeight="xl">
            available car in current location
          </Text>
        </HStack>
        <Spacer />
        <VStack space={4} mt={7}>
          <Button onPress={() => navigation.navigate("LocalAuth")}>
            Continue
          </Button>
          <Button variant="poutline" size="lg">
            Skip
          </Button>
        </VStack>
      </Flex>
    </SafeAreaView>
  );
}
