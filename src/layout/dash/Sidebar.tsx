import {
  Box,
  useColorModeValue,
  Divider,
  Center,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";
import { lightBorder, darkBorder, lightBackground, darkBackground } from "../../styles/constants";
import Logo from "../../components/Logo";



interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <Box
        width={320}
        top={0}
        height={"100%"}
        position="fixed"
        alignItems="center"
        borderRightWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        display={{ base: "none", sm: "none", md: "flex" }}
        flexDirection="column"
        bgColor={useColorModeValue(lightBackground, darkBackground)}
      >
        <Box pt={6} pb={6}>
            <Logo size="md"/>
          </Box>

          <Divider width="90%" />

          <Flex direction="column" justifyContent="space-between" h="100%">
            <NavMenu/>
            <Center p={2}>Logo</Center>
          </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
