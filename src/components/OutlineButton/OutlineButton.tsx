import { Pressable } from "native-base";
import React from "react";
import { Text } from "react-native";

interface Props {
  icon?: any;
  children: any;
}

const OutlineButton: React.FC<Props> = ({ icon, children }) => {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;
