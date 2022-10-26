import React from "react";

import { Box, Button, Icon, View, ZStack } from "native-base";

interface Props {
  icon?: any;
  children: any;
  iconAs?: any;
  iconName?: string;
  iconColor?: string;
  buttonVariant?: string;
  onPress?: () => void;
  iconElement?: JSX.Element;
}

const OutlineButton: React.FC<Props> = ({
  icon,
  children,
  iconAs,
  iconName,
  iconColor,
  onPress,
  buttonVariant = "outline",
  iconElement,
}) => {
  return (
    <Box h="56px">
      <ZStack justifyContent="center" mt="7">
        {iconElement ? <View ml={6}>{iconElement}</View> : null}
        {iconAs && iconName && !iconElement ? (
          <Icon as={iconAs} name={iconName} color={iconColor} size="6" ml="6" />
        ) : null}
        <Button
          width="100%"
          variant={buttonVariant}
          onPress={onPress}
          // alignContent="start"
          // startIcon={}
        >
          {children}
        </Button>
      </ZStack>
    </Box>
  );
};

export default OutlineButton;
