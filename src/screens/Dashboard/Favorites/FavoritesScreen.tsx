import { Text, View } from "native-base";
import React from "react";
import { DashboardTabScreenProps } from "../../../navigation/types";

export default function FavoritesScreen({
  navigation,
}: DashboardTabScreenProps<"Favorites">) {
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
}
