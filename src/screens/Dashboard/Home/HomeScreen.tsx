import { Box, Flex, Icon, Spacer, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TablerIcons from "../../../components/TablerIcons/TablerIcons";
import { DashboardTabScreenProps } from "../../../navigation/types";

export default function HomeScreen({
  navigation,
}: DashboardTabScreenProps<"Home">) {
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <Flex flexDirection="column" flex="1" pb={8} px={6}>
        <Flex flexDir="row" py="3" alignItems="center">
          <Box p="3" borderWidth="1" borderColor="gray.200" borderRadius="xl">
            <Icon as={TablerIcons} name="map-pin" size={6} color="gray.900" />
          </Box>
          <VStack ml={3}>
            <Text fontWeight="medium" color="gray.500" fontSize="xs">
              Location
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              San Francisco
            </Text>
          </VStack>
          <Spacer />
          <Box p="3" borderWidth="1" borderColor="gray.200" borderRadius="xl">
            <Icon as={TablerIcons} name="bell" size={6} color="gray.900" />
          </Box>
        </Flex>
        {/*     <VStack space={2} mt={4} mx={6} mb={6}>
          <Heading size="lg">Which brand of car do you prefer?</Heading>
          <Text color="gray.500">Select all that you interested in.</Text>
        </VStack> */}

        {/*   <Button
          position="absolute"
          bottom="2"
          left="6"
          right="6"
          onPress={() => navigation.navigate("Dashboard")}
        >
          Finish
        </Button> */}
      </Flex>
    </SafeAreaView>
  );
}
