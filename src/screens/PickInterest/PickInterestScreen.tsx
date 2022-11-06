import {
  Box,
  Button,
  Flex,
  Heading,
  Pressable,
  Spacer,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatGrid } from "react-native-super-grid";
import Bmw from "../../../assets/svg/bmw.svg";
import Ford from "../../../assets/svg/ford.svg";
import Lambo from "../../../assets/svg/lambo.svg";
import Tesla from "../../../assets/svg/tesla.svg";
import { RootStackScreenProps } from "../../navigation/types";
interface Props {
  //key?: any;
  myKey?: any;
  item?: any;
  name?: string;
  selectedLogo?: JSX.Element;
  unSelectedLogo?: JSX.Element;
  isSelected?: boolean;
  onPress?: () => void;
}

const carList = [
  {
    name: "Tesla",
    selectedLogo: <Tesla fill="white" />,
    unSelectedLogo: <Tesla fill="#0F172A" />,
  },
  {
    name: "BMW",
    selectedLogo: <Bmw fill="white" />,
    unSelectedLogo: <Bmw fill="#0F172A" />,
  },
  {
    name: "Lamborghini",
    selectedLogo: <Lambo fill="white" />,
    unSelectedLogo: <Lambo fill="#0F172A" />,
  },
  {
    name: "Ford",
    selectedLogo: <Ford fill="white" />,
    unSelectedLogo: <Ford fill="#0F172A" />,
  },
];
const CarSelection: React.FC<Props> = ({
  myKey,
  name,
  selectedLogo,
  unSelectedLogo,
  isSelected = false,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        borderColor={isSelected ? "primary.500" : "gray.100"}
        borderWidth="1"
        borderRadius="16px"
        alignItems="center"
        paddingY={4}
        key={myKey}
      >
        <VStack space={3} alignItems="center">
          <Box
            width={10}
            height={10}
            backgroundColor={isSelected ? "primary.500" : "gray.100"}
            alignItems="center"
            borderRadius="10px"
            justifyContent="center"
          >
            {isSelected ? selectedLogo : unSelectedLogo}
            {/* {logo} */}
            {/* <Center>{React.createElement(Svg, { fill: "red" }, null)}</Center> */}
            {/* <Tesla fill="white" /> */}
            {/* <Text>d</Text> */}
          </Box>
          <Text fontSize="sm" bold color={isSelected ? "primary.500" : null}>
            {name}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};
export default function PickInterestScreen({
  navigation,
}: RootStackScreenProps<"PickInterest">) {
  const { height } = useWindowDimensions();
  const [selectedCars, setSelectedCars] = React.useState<string[]>([]);

  const onPressCarItem = (name: string) => {
    if (selectedCars.includes(name)) {
      setSelectedCars((items) => items.filter((i) => i != name));
    } else {
      setSelectedCars((v) => [...v, name]);
    }
  };
  return (
    <SafeAreaView style={[{ flex: 1 }, { backgroundColor: "white" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#000002" />
      <Flex flexDirection="column" flex="1" pb={8}>
        <Flex flexDirection="row" paddingY="5" mx={6}>
          <Spacer />
          <Text color="primary.500" fontWeight="bold">
            Skip
          </Text>
        </Flex>
        <VStack space={2} mt={4} mx={6} mb={6}>
          <Heading size="lg">Which brand of car do you prefer?</Heading>
          <Text color="gray.500">Select all that you interested in.</Text>
        </VStack>
        <FlatGrid
          data={carList}
          itemDimension={120}
          style={{ marginHorizontal: 8 }}
          spacing={16}
          renderItem={({ item }) => (
            <CarSelection
              myKey={item.name}
              {...item}
              isSelected={selectedCars.includes(item.name)}
              onPress={() => onPressCarItem(item.name)}
            />
          )}
        />

        <Button
          position="absolute"
          bottom="2"
          left="6"
          right="6"
          onPress={() => navigation.navigate("Dashboard")}
        >
          Finish
        </Button>
      </Flex>
    </SafeAreaView>
  );
}
