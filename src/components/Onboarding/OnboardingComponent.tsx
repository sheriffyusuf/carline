import {
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  View,
} from "native-base";
import { ImageBackground, useWindowDimensions } from "react-native";
import car_one from "../../../assets/onboarding/car_one.png";
import car_two from "../../../assets/onboarding/car_two.png";

interface Props {
  title: string;
  subtitle: string;
  onButtonClick?: () => void;
  showBackgroundImage?: boolean;
}

const BackgroundImage = ({
  children,
  showBackgroundImage,
}: {
  children: React.ReactNode;
  showBackgroundImage: boolean;
}) => {
  return showBackgroundImage ? (
    <ImageBackground
      source={car_one}
      resizeMode="cover"
      // style={{ display: showBackgroundImage ? "flex" : "none" }}
    >
      {children}
    </ImageBackground>
  ) : (
    <View>{children}</View>
  );
};

const OnboardingComponent: React.FC<Props> = ({
  title,
  subtitle,
  onButtonClick,
  showBackgroundImage = false,
}) => {
  const { width } = useWindowDimensions();

  return (
    <BackgroundImage
      showBackgroundImage={showBackgroundImage}
      // style={{ display: showBackgroundImage ? "flex" : "none" }}
    >
      <View paddingX="6" height="100%">
        <Flex flexDirection="column" flex="1" pb="32">
          <Stack width={width * 0.7} space="3">
            <Heading fontSize="3xl" color="white" lineHeight="40">
              {title}
            </Heading>
            <Text color="gray.400" fontSize="md">
              {subtitle}
            </Text>
          </Stack>
          {!showBackgroundImage && (
            <>
              <Spacer />
              <Image source={car_two} alt="car_two" />
            </>
          )}
          <Spacer />
          <Button variant="primary" onPress={onButtonClick}>
            Next
          </Button>
        </Flex>
      </View>
    </BackgroundImage>
  );
};

export default OnboardingComponent;
