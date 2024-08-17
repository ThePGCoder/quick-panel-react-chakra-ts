import { Flex, IconButton, Box } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

interface SocialProvidersProps {}

const SocialProviders: React.FC<SocialProvidersProps> = () => {
  return (
    <>
      <Flex gap={2} alignItems="center">
        <IconButton aria-label={"goggle"} variant="ghost">
          <Icon icon="logos:google-icon" height={22}/>
        </IconButton>
        <Box fontSize="sm">or connect with:</Box>
        <IconButton aria-label={"facebook"} variant="ghost">
          <Icon icon="logos:facebook" height={22}/>
        </IconButton>
      </Flex>
    </>
  );
};

export default SocialProviders;
