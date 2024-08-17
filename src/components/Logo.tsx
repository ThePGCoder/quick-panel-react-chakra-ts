import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { primary, secondary } from "../styles/constants";
import { Icon } from "@iconify/react";

interface LogoProps {
  size: string;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        fontSize={size == "sm" ? "1rem" : size == "md" ? "1.33rem" : "2rem"}
        fontFamily={"Michroma"}
        fontStyle="italic"
      >
        <Box fontWeight={600} color={useColorModeValue(primary, secondary)}>
          quick
        </Box>
        <Box fontWeight={600}>panel</Box>

        <Box width={size == "sm" ? "4px" : size == "md" ? "6px" : "8px"} />
        <Box pt={size == "sm" ? "4px" : size == "md" ? "6px" : "8px"}>
          <Icon
            icon="octicon:feed-rocket-16"
            color={useColorModeValue(primary, secondary)}
            height={size == "sm" ? "1rem" : size == "md" ? "1.33rem" : "2rem"}
          />
        </Box>
      </Box>
    </>
  );
};

export default Logo;
