import { LinearGradient } from "expo-linear-gradient";
import { Box, FlatList, Flex, Icon, Spacer, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Heart from "../../../../assets/svg/heart.svg";
import TablerIcons from "../../../components/TablerIcons/TablerIcons";
import { DashboardTabScreenProps } from "../../../navigation/types";

const HomeSkeleton = ({ children }: { children: any }) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  const topBrands = [1, 2, 3];
  return (
    <>
      <Flex flexDir="row" justifyContent="space-between">
        <ShimmerPlaceholder
          //shimmerStyle={shimmerStyle}
          shimmerStyle={{ borderRadius: 8 }}
          width={101}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
        <ShimmerPlaceholder
          //shimmerStyle={shimmerStyle}
          shimmerStyle={{ borderRadius: 8 }}
          width={55}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
      </Flex>
      <Flex flexDir="row" mt={4}>
        {topBrands.map((item, i) => (
          <Box
            py="4"
            flex="1"
            borderWidth="1"
            key={i}
            borderColor="gray.200"
            borderRadius="xl"
            ml={i == 0 ? null : 4}
          >
            <VStack space={5} alignItems="center">
              <ShimmerPlaceholder
                //shimmerStyle={shimmerStyle}
                shimmerStyle={{ borderRadius: 8 }}
                width={40}
                height={40}
                shimmerColors={["#E2E8F0", "#F9FAFB"]}
                location={[0.1, 1]}
                visible={false}
              />
              <ShimmerPlaceholder
                //shimmerStyle={shimmerStyle}
                shimmerStyle={{ borderRadius: 4 }}
                width={48}
                height={14}
                shimmerColors={["#E2E8F0", "#F9FAFB"]}
                location={[0.1, 1]}
                visible={false}
              />
            </VStack>
          </Box>
        ))}
      </Flex>
      <Flex flexDir="row" justifyContent="space-between" mt={6}>
        <ShimmerPlaceholder
          //shimmerStyle={shimmerStyle}
          shimmerStyle={{ borderRadius: 8 }}
          width={101}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
        <ShimmerPlaceholder
          //shimmerStyle={shimmerStyle}
          shimmerStyle={{ borderRadius: 8 }}
          width={55}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
      </Flex>
      <Box mt={6}>
        <FlatList
          data={[1, 2]}
          horizontal={true}
          ItemSeparatorComponent={() => <Box w={4} />}
          renderItem={(i) => (
            <Box bg="gray.100" p={5} borderRadius="2xl">
              <Flex flexDir="row" justifyContent="space-between">
                <ShimmerPlaceholder
                  shimmerStyle={{ borderRadius: 4 }}
                  width={48}
                  height={14}
                  shimmerColors={["#E2E8F0", "#F9FAFB"]}
                  location={[0.1, 1]}
                  visible={false}
                />
                <Heart fill="#CBD5E1" />
              </Flex>
              <ShimmerPlaceholder
                shimmerStyle={{ borderRadius: 12, marginTop: 16 }}
                width={185}
                height={118}
                shimmerColors={["#E2E8F0", "#F9FAFB"]}
                location={[0.1, 1]}
                visible={false}
              />
            </Box>
          )}
        />
      </Box>
    </>
  );
};

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
        <Box mt={6}>
          <HomeSkeleton>
            <Box />
          </HomeSkeleton>
        </Box>
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
