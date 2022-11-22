import { Text, View } from "native-base";
import React from "react";
import { RootStackScreenProps } from "../../navigation/types";

export default function ListCarScreen({
  navigation,
}: RootStackScreenProps<"ListCar">) {
  return (
    <View>
      <Text>List Car Screen</Text>
    </View>
  );
}
