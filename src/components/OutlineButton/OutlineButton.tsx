import React from "react";

import { Box, Button, Icon, ZStack } from "native-base";

interface Props {
  icon?: any;
  children: any;
  iconAs?: any;
  iconName?: string;
  iconColor?: string;
  onPress?: () => void;
}

const OutlineButton: React.FC<Props> = ({
  icon,
  children,
  iconAs,
  iconName,
  iconColor,
  onPress,
}) => {
  return (
    <Box h="56px">
      <ZStack justifyContent="center" mt="7">
        {iconAs && iconName && (
          <Icon as={iconAs} name={iconName} color={iconColor} size="6" ml="6" />
        )}
        <Button
          width="100%"
          variant="outlined"
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
