import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Divider,
  FlatList,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { NumericFormat } from "react-number-format";
import jeep from "../../../assets/jeep.png";
import Audi from "../../../assets/svg/audi.svg";
import Filter from "../../../assets/svg/filter.svg";
import TablerIcons from "../../components/TablerIcons/TablerIcons";
import { RootStackScreenProps } from "../../navigation/types";

const Chip = () => {
  return (
    <Box px={3} py={2} borderColor="gray.200" borderWidth={1} borderRadius="lg">
      <HStack alignItems={"center"} space={2}>
        <Filter />
        <Text>Filter</Text>
      </HStack>
    </Box>
  );
};

const CarTile = () => {
  return (
    <Box bg="gray.100" p={4} borderRadius="20">
      <VStack space="14">
        <HStack space={3} alignItems="center" justifyContent="stretch">
          <Image source={jeep} alt="car_image" />
          <VStack space={3} flex="1">
            <Text bold fontSize="lg" lineHeight="lg">
              Jeep Rubicon
            </Text>
            <Flex flexDir="row" alignItems="center">
              <Audi />
              <Spacer />
              <HStack space={1} alignItems="center">
                <Icon
                  as={FontAwesome}
                  name="star"
                  size={4}
                  color="yellow.500"
                />
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  4.8
                </Text>
              </HStack>
            </Flex>
          </VStack>
        </HStack>
        <Divider />
        <Flex flexDir="row" justifyContent="space-between">
          <HStack space={3}>
            <HStack alignItems="center" space={1}>
              <Icon as={TablerIcons} name="engine" size={4} color="gray.500" />
              <Text
                fontSize="sm"
                lineHeight="xl"
                fontWeight="medium"
                color="gray.500"
              >
                420hp
              </Text>
            </HStack>
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
          </HStack>
          <NumericFormat
            value={"112150.00"}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text color="primary.500" bold fontSize="md">
                {formattedValue}
              </Text>
            )} // <--- Don't forget this!
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default function ListCarScreen({
  navigation,
}: RootStackScreenProps<"ListCar">) {
  return (
    <Flex flexDirection="column" bg="white" flex="1" px={6} pb={6} pt={4}>
      <Box height="10">
        <FlatList
          horizontal={true}
          data={[1]}
          renderItem={() => <Chip />}
          ItemSeparatorComponent={() => <Box width={"12px"} />}
          flexWrap="wrap"
        />
      </Box>
      <FlatList
        style={{ marginTop: 24 }}
        data={[1, 2]}
        renderItem={() => <CarTile />}
        ItemSeparatorComponent={() => <Box height={"16px"} />}
      />
    </Flex>
  );
}
