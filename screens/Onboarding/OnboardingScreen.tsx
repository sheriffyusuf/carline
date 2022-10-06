import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../../navigation/types";

export default function OnboardingScreen({
  navigation,
}: RootStackScreenProps<"Onboarding">) {
  return (
    <SafeAreaView>
      <View>
        <Text>dd</Text>
      </View>
    </SafeAreaView>
  );
}
