import { Text, View } from "native-base";
import React from "react";
import { DashboardTabScreenProps } from "../../../navigation/types";

export default function ProfileScreen({
  navigation,
}: DashboardTabScreenProps<"Profile">) {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
