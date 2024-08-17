import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import MobileDrawer from "./Drawer";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DashLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header toggleDrawer={onOpen} />
      <MobileDrawer isOpen={isOpen} onClose={onClose} toggleDrawer={onClose} />
      <Sidebar />
      
        <Box
          ml={{ base: "none", sm: "none", md: 320 }}
          transition={"0.2s ease"}
          background={useColorModeValue(
            "radial-gradient(circle, #ffffff 33%, transparent 66%)",
            "radial-gradient(circle, #242424 0%, transparent 66%)"
          )}
          
          height="100vh"
          p={4}
        >
          <Outlet/>
        </Box>
      
      <Footer />
    </>
  );
};

export default DashLayout;