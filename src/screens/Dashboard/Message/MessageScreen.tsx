import { Text, View } from "native-base";
import React from "react";
import { DashboardTabScreenProps } from "../../../navigation/types";

export default function MessageScreen({
  navigation,
}: DashboardTabScreenProps<"Message">) {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}
