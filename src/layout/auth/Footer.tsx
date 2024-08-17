import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { lightBorder, darkBorder, primary } from "../../styles/constants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box
        width="100%"
        height={50}
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"       
        borderTopWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        
      >
        <Box display="flex" fontSize="0.75rem">
          <Box color={primary}>&nbsp;&#123;</Box>
          <Box fontStyle="italic" fontFamily="corinthia">
            the
          </Box>
          <Box fontWeight="bold" fontSize="0.75rem">PGCoder</Box><Box color={primary}>...&#125;</Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
