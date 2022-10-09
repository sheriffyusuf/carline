import { Flex, Spacer, StatusBar, Text } from "native-base";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingComponent from "../../components/Onboarding/OnboardingComponent";

import { RootStackScreenProps } from "../../navigation/types";

export default function OnboardingScreen({
  navigation,
}: RootStackScreenProps<"Onboarding">) {
  const { width } = useWindowDimensions();
  const [currentStep, setCurrentStep] = React.useState("two");
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: currentStep == "one" ? "#000002" : "#4038ff" },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000002" />

      <Flex flex="1" flexDir="column">
        <Flex flexDirection="row" paddingY="5" paddingX="6">
          <Spacer />
          <Text color="primary.500" fontWeight="bold">
            Skip
          </Text>
        </Flex>
        {/*   <OnboardingComponent
          title="Find the best car without headaches"
          subtitle="You choose your car online. We inspect it and deliver it."
          showBackgroundImage={true}
        /> */}
        <OnboardingComponent
          title="Let’s get started"
          subtitle="Sign up or login to see what's happening near you"
        />
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
  },
});
