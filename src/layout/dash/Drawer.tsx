import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  Divider,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";
import Logo from "../../components/Logo";


interface DrawerProps {
  isOpen: any;
  onClose: any;
  toggleDrawer: any;
}

const MobileDrawer: React.FC<DrawerProps> = ({
  onClose,
  isOpen,
  toggleDrawer,
}) => {
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("#fff", "#1a202c")}
          alignItems="center"
        >
          <Box pt={6} pb={6}>
            <Logo size="md"/>
          </Box>

          <Divider width="90%" />

          <Flex direction="column" justifyContent="space-between" h="100%">
            <NavMenu toggleDrawer={toggleDrawer} />
            <Center p={2}>Logo</Center>
          </Flex>
        </DrawerContent>
        
      </Drawer>
    </>
  );
};

export default MobileDrawer;
