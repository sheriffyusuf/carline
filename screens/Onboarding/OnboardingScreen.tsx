import { Flex, Spacer, StatusBar, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../../navigation/types";

export default function OnboardingScreen({
  navigation,
}: RootStackScreenProps<"Onboarding">) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#000002" }]}>
      <StatusBar barStyle="light-content" backgroundColor="#000002" />

      <Flex flexDirection="row" paddingX="6" paddingY="5">
        <Spacer />
        <Text color="primary.500" fontWeight="bold">
          Skip
        </Text>
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
