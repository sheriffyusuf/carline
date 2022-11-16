import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  Button,
  Divider,
  FlatList,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { NumericFormat } from "react-number-format";
import audi from "../../../../assets/audi.png";
import Audi from "../../../../assets/svg/audi.svg";
import Bmw from "../../../../assets/svg/bmw.svg";
import Car from "../../../../assets/svg/car.svg";
import Ford from "../../../../assets/svg/ford.svg";
import Lambo from "../../../../assets/svg/lambo.svg";
import Search from "../../../../assets/svg/search.svg";
import TablerIcons from "../../../components/TablerIcons/TablerIcons";
import { DashboardTabScreenProps } from "../../../navigation/types";

const topBrands = [
  { name: "Lamborghini", logo: <Lambo /> },
  { name: "BMW", logo: <Bmw /> },
  { name: "Ford", logo: <Ford fill="white" /> },
];
const carTypes = [
  {
    name: "SUV",
    logo: <Icon as={TablerIcons} name="car" size={5} color="white" />,
  },
  { name: "Hatchback", logo: <Car fill="white" /> },
  { name: "EV/Hybrid", logo: <Car fill="white" /> },
];
const HomeSkeleton = ({
  children,
  isLoading = true,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return isLoading ? (
    <>
      <Flex flexDir="row" justifyContent="space-between">
        <ShimmerPlaceholder
          shimmerStyle={{ borderRadius: 8 }}
          width={101}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
        <ShimmerPlaceholder
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
                shimmerStyle={{ borderRadius: 8 }}
                width={40}
                height={40}
                shimmerColors={["#E2E8F0", "#F9FAFB"]}
                location={[0.1, 1]}
                visible={false}
              />
              <ShimmerPlaceholder
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
          shimmerStyle={{ borderRadius: 8 }}
          width={101}
          height={20}
          shimmerColors={["#E2E8F0", "#F9FAFB"]}
          location={[0.1, 1]}
          visible={false}
        />
        <ShimmerPlaceholder
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
                <Icon
                  as={FontAwesome}
                  name="heart"
                  size={5}
                  ml="3"
                  color="gray.300"
                />
              </Flex>
              <ShimmerPlaceholder
                shimmerStyle={{ borderRadius: 12, marginTop: 16 }}
                width={185}
                height={118}
                shimmerColors={["#E2E8F0", "#F9FAFB"]}
                location={[0.1, 1]}
                visible={false}
              />
              <Flex flexDir="row" justifyContent="space-between" mt={3}>
                <ShimmerPlaceholder
                  shimmerStyle={{ borderRadius: 4 }}
                  width={101}
                  height={16}
                  shimmerColors={["#E2E8F0", "#F9FAFB"]}
                  location={[0.1, 1]}
                  visible={false}
                />
                <ShimmerPlaceholder
                  shimmerStyle={{ borderRadius: 4 }}
                  width={55}
                  height={16}
                  shimmerColors={["#E2E8F0", "#F9FAFB"]}
                  location={[0.1, 1]}
                  visible={false}
                />
              </Flex>
              <Divider my={3} />
              <Flex flexDir="row" justifyContent="space-between">
                <ShimmerPlaceholder
                  shimmerStyle={{ borderRadius: 4 }}
                  width={101}
                  height={16}
                  shimmerColors={["#E2E8F0", "#F9FAFB"]}
                  location={[0.1, 1]}
                  visible={false}
                />
                <ShimmerPlaceholder
                  shimmerStyle={{ borderRadius: 4 }}
                  width={55}
                  height={16}
                  shimmerColors={["#E2E8F0", "#F9FAFB"]}
                  location={[0.1, 1]}
                  visible={false}
                />
              </Flex>
            </Box>
          )}
        />
      </Box>
    </>
  ) : (
    <View>{children}</View>
  );
};

const CarCard = () => {
  const { width: w } = useWindowDimensions();
  return (
    <Box bg="gray.100" p={5} borderRadius="2xl" w={w * 0.6}>
      <Flex flexDir="row" justifyContent="space-between">
        <Audi />
        <Icon as={FontAwesome} name="heart" size={5} ml="3" color="gray.300" />
      </Flex>
      <Image source={audi} alt="car_image" mt={4} />
      <Flex
        flexDir="row"
        justifyContent="space-between"
        mt={2}
        alignItems="center"
      >
        <Text lineHeight="xl" bold>
          Audi A8 Quattro
        </Text>
        <HStack space={1}>
          <Icon as={FontAwesome} name="star" size={5} color="yellow.500" />
          <Text color="gray.500" fontSize="sm" fontWeight="medium">
            4.8
          </Text>
        </HStack>
      </Flex>
      <Divider my={3} />
      <Flex flexDir="row" justifyContent="space-between">
        <HStack alignItems="center" space={1}>
          <Icon
            as={TablerIcons}
            name="manual-gearbox"
            size={4}
            color="gray.500"
          />
          <Text
            fontSize="sm"
            lineHeight="xl"
            fontWeight="medium"
            color="gray.500"
          >
            Automatic
          </Text>
        </HStack>
        <NumericFormat
          value={"112150.00"}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(formattedValue) => (
            <Text color="primary.500" bold>
              {formattedValue}
            </Text>
          )} // <--- Don't forget this!
        />
      </Flex>
    </Box>
  );
};

export default function HomeScreen({
  navigation,
}: DashboardTabScreenProps<"Home">) {
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <Flex flexDirection="column" flex="1" pb={8}>
        <View px={6}>
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
          <Box mt={4} bg="gray.100" borderRadius="2xl">
            <Input
              size="lg"
              variant="unstyled"
              bg="gray.100"
              placeholder="Search cars..."
              InputRightElement={
                <Pressable onPress={() => true} py={4} pr={4}>
                  <Search />
                </Pressable>
              }
            />
          </Box>
        </View>
        <Box mt={6}>
          <HomeSkeleton isLoading={false}>
            <ScrollView showsVerticalScrollIndicator={false} marginBottom={20}>
              <View px={6}>
                <Flex
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={18} bold lineHeight="lg">
                    Top brands
                  </Text>
                  <Text color="gray.500" lineHeight="xl" fontSize="sm">
                    View all
                  </Text>
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
                      <VStack space={3} alignItems="center">
                        <Box
                          width={10}
                          height={10}
                          backgroundColor={"gray.900"}
                          alignItems="center"
                          borderRadius="10px"
                          justifyContent="center"
                        >
                          {item.logo}
                        </Box>
                        <Text fontSize="sm" bold color="gray.900">
                          {item.name}
                        </Text>
                      </VStack>
                    </Box>
                  ))}
                </Flex>
              </View>
              <Flex
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={6}
                px={6}
              >
                <Text fontSize={18} bold lineHeight="lg">
                  Car recommendation
                </Text>
                <Text color="gray.500" lineHeight="xl" fontSize="sm">
                  View all
                </Text>
              </Flex>
              <FlatList
                data={[1, 2]}
                marginTop={5}
                pl={6}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Box w={4} />}
                renderItem={(i) => <CarCard />}
              />
              <View px={6} mt={8}>
                <Flex
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={18} bold lineHeight="lg">
                    Shop by car type
                  </Text>
                  <Text color="gray.500" lineHeight="xl" fontSize="sm">
                    View all
                  </Text>
                </Flex>
                <Flex flexDir="row" mt={4}>
                  {carTypes.map((item, i) => (
                    <Box
                      py="4"
                      flex="1"
                      borderWidth="1"
                      key={i}
                      borderColor="gray.200"
                      borderRadius="xl"
                      ml={i == 0 ? null : 4}
                    >
                      <VStack space={3} alignItems="center">
                        <Box
                          width={10}
                          height={10}
                          backgroundColor={"gray.900"}
                          alignItems="center"
                          borderRadius="10px"
                          justifyContent="center"
                        >
                          {item.logo}
                        </Box>
                        <Text fontSize="sm" bold color="gray.900">
                          {item.name}
                        </Text>
                      </VStack>
                    </Box>
                  ))}
                </Flex>
              </View>
              <Box mt={6} bg="gray.900" py={5} pl={5} mx={6} borderRadius="2xl">
                <VStack alignItems="start">
                  <Text color="white" bold fontSize="lg" lineHeight="xl">
                    Test drive in your area
                  </Text>
                  <Text fontSize="md" color="gray.400" mt={1}>
                    {`Test drive from your home\n or a Carline hub.`}
                  </Text>
                  <Button
                    variant="outline"
                    _text={{ color: "white" }}
                    size="md"
                    mt={4}
                  >
                    View cars
                  </Button>
                </VStack>
              </Box>
            </ScrollView>
          </HomeSkeleton>
        </Box>
      </Flex>
    </SafeAreaView>
  );
}
